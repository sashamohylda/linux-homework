# Домашнє завдання — Модуль 6
**Варіант A: Скрипт бекапу логів**

---

## Код скрипта

```bash
#!/bin/bash
# ============================================
# Назва:   backup.sh
# Опис:    Резервне копіювання логів у .tar.gz
# Автор:   Mogilda Alexandra
# Версія:  1.0
# ============================================

LOCK_FILE="/tmp/backup.lock"

if [ "$#" -ne 2 ]; then
    echo "Usage: ./backup.sh <log_dir> <backup_dir>"
    exit 1
fi

LOG_DIR="$1"
BACKUP_DIR="$2"

if [ ! -d "$LOG_DIR" ]; then
    echo "Usage: ./backup.sh <log_dir> <backup_dir>"
    exit 1
fi

if [ ! -d "$BACKUP_DIR" ]; then
    echo "Usage: ./backup.sh <log_dir> <backup_dir>"
    exit 1
fi

if [ -f "$LOCK_FILE" ]; then
    echo "Backup already running"
    exit 1
fi

touch "$LOCK_FILE"
trap "rm -f '$LOCK_FILE'" EXIT

TIMESTAMP=$(date '+%Y-%m-%d_%H-%M')
ARCHIVE_NAME="logs_backup_${TIMESTAMP}.tar.gz"
ARCHIVE_PATH="${BACKUP_DIR}/${ARCHIVE_NAME}"

tar -czf "$ARCHIVE_PATH" -C "$LOG_DIR" . 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Backup failed"
    exit 2
fi

echo "Backup created: $ARCHIVE_PATH"
```

---

## Опис роботи скрипта

### Запуск
```bash
./backup.sh /path/to/logs /path/to/backup
```

### Що відбувається покроково

**1. Перевірка аргументів** — скрипт перевіряє що передано рівно 2 аргументи і обидва є існуючими каталогами. Інакше виводить Usage і завершується з кодом 1.

**2. Захист від паралельного запуску** — перевіряється наявність /tmp/backup.lock. Якщо файл існує — скрипт зупиняється. Команда trap видаляє lock автоматично при завершенні.

**3. Створення архіву** — формується ім'я з датою і часом, tar створює стиснений .tar.gz архів.

**4. Перевірка результату** — якщо tar завершився з помилкою виводиться Backup failed з кодом 2. Якщо успішно — виводиться повний шлях до архіву.

---

## Результати тестування

- Нормальний запуск → Backup created: /tmp/test_backup/logs_backup_2026-05-11_12-20.tar.gz ✅
- Без аргументів → Usage: ./backup.sh <log_dir> <backup_dir> ✅
- Неіснуючий каталог → Usage: ./backup.sh <log_dir> <backup_dir> ✅
- Паралельний запуск → Backup already running ✅
