# 🧬 Data Models

## 📊 Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    USER ||--o{ SUBMISSION : makes
    USER ||--o{ DAILY_PROGRESS : tracks
    USER ||--o{ COURSE : enrolls
    COURSE ||--o{ MODULE : contains
    SUBMISSION }o--|| PROBLEM : "refers to"
    PROBLEM ||--o{ TEST_CASE : includes
