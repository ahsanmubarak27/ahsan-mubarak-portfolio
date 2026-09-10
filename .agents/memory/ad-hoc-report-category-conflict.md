---
name: Ad hoc report category conflict
description: Source-of-truth decision for conflicting product-category findings in the SQL and Excel ad hoc reporting project.
---

Use the numeric product-category table in the uploaded Excel report as the source of truth when presenting rankings or findings. Do not repeat its embedded commentary that names Electronics and Beauty as the top profit categories, because the table ranks Clothing first, Electronics second, Furniture third, and Beauty fourth by profit.

**Why:** The workbook's narrative commentary contradicts the report values. The table provides the actual SQL output and is internally consistent with its ranking column.

**How to apply:** Preserve the table-derived values and rankings in future edits unless the user supplies a corrected workbook or explicitly resolves the conflict.