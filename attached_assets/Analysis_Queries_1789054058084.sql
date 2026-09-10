
CREATE TABLE Categories(
product_category_id INT PRIMARY KEY,
product_category VARCHAR(50)
);

CREATE TABLE Regions(
region_id INT PRIMARY KEY,
region_name VARCHAR(50)
);

CREATE TABLE Segments(
segment_id INT PRIMARY KEY,
segment_name VARCHAR(50)
);

CREATE TABLE Expenses(
month_id INT PRIMARY KEY,
month DATE,
marketing_expense INT,
operational_expense INT,
staff_expense INT,
total_expense INT
);

CREATE TABLE Orders(
order_id INT PRIMARY KEY,
order_date DATE,
customer_id INT,
region_id INT,
product_category_id INT,
sales INT,
profit INT,
quantity INT,
profit_margin INT,
FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Customers(
customer_id INT PRIMARY KEY,	
customer_name VARCHAR(50),
segment_id INT,
region_id INT,
FOREIGN KEY (segment_id) REFERENCES segments(segment_id),
FOREIGN KEY (region_id) REFERENCES regions(region_id)
);

-- Companies want to understand financial performance in terms of sales, profit, expenses, and customer segments
-- Provides financial insights to help make decisions about pricing, marketing, and budget allocation

SELECT
  SUM(sales) as total_sales,
  SUM(profit) as total_profit,
  AVG(profit_margin) as profit_margin
FROM
  orders;

SELECT
  product_category_id,
  SUM(sales) as total_sales,
  SUM(profit) as total_profit
FROM
  orders
GROUP BY
  product_category_id;

SELECT
  c.product_category,
  SUM(o.sales) as total_sales,
  SUM(o.profit) as total_profit
FROM
  orders o
  JOIN categories c on o.product_category_id = c.product_category_id
GROUP BY
  c.product_category
ORDER BY
  total_sales DESC;

SELECT * FROM expenses;
SELECT * FROM orders;

ALTER TABLE expenses CHANGE month_id expense_id INT; 

ALTER TABLE orders add expense_id INT;

ALTER TABLE orders ADD CONSTRAINT FK_orders_exspenses
FOREIGN KEY (expense_id) REFERENCES
expenses(expense_id);

SELECT 
DATE_FORMAT(order_date, '%Y-%m-01') AS month,
SUM(sales) AS total_sales,
SUM(profit) AS total_profit
FROM orders
GROUP BY DATE_FORMAT(order_date, '%Y-%m-01')
ORDER BY month;

SELECT 
    s.month,
    s.total_sales,
    s.total_profit,
    e.total_expense,
    (s.total_profit - e.total_expense) AS net_profit
FROM (
    SELECT 
        DATE_FORMAT(order_date, '%Y-%m-01') AS month,
        SUM(sales) AS total_sales,
        SUM(profit) AS total_profit
    FROM orders
    GROUP BY DATE_FORMAT(order_date, '%Y-%m-01')
) s
JOIN expenses e
  ON DATE_FORMAT(e.month, '%Y-%m-01') = s.month
ORDER BY s.month;

SELECT
  s.segment_name,
  SUM(o.profit) as total_profit,
  SUM(o.sales) as total_sales
FROM
  orders o
  JOIN customers c on o.customer_id = c.customer_id
  JOIN segments s on s.segment_id = c.segment_id
GROUP BY
  s.segment_name
order by
  total_profit DESC;

SELECT * FROM regions;

SELECT
  r.region_name,
  SUM(o.profit) as total_profit,
  SUM(o.sales) as total_sales
FROM
  orders o
  JOIN customers c on o.customer_id = c.customer_id
  JOIN regions r on r.region_id = c.region_id
GROUP BY
  r.region_name
order by
  total_profit DESC;
  
  
SELECT 
    year,
    product_category,
    total_sales,
    total_profit,
    RANK() OVER (ORDER BY total_profit DESC) AS rank_no
FROM (
    SELECT 
        YEAR(o.order_date) AS year,
        c.product_category,
        SUM(o.sales) AS total_sales,
        SUM(o.profit) AS total_profit
    FROM orders o
    JOIN categories c 
      ON o.product_category_id = c.product_category_id
    WHERE YEAR(o.order_date) = 2023
    GROUP BY YEAR(o.order_date), c.product_category
) AS sub;

SELECT
  s.segment_name,
  AVG(o.profit_margin) as average_profit_margin
FROM
  orders o
  JOIN customers c on o.customer_id = c.customer_id
  JOIN segments s on s.segment_id = c.segment_id
GROUP BY
  s.segment_name
order by
  average_profit_margin DESC;
  
  
SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m-01') AS month,
    SUM(o.sales) AS total_sales,
    SUM(o.profit) AS total_profit,
    e.total_expense,
    (SUM(o.profit) - e.total_expense) AS net_profit,
    CASE 
        WHEN (SUM(o.profit) - e.total_expense) < 0 THEN 'Negative'
        ELSE 'Positive'
    END AS profit_status
FROM orders o
JOIN expenses e
  ON DATE_FORMAT(o.order_date, '%Y-%m-01') = DATE_FORMAT(e.month, '%Y-%m-01')
WHERE YEAR(o.order_date) BETWEEN 2022 AND 2023
GROUP BY DATE_FORMAT(o.order_date, '%Y-%m-01'), e.total_expense
ORDER BY month;
