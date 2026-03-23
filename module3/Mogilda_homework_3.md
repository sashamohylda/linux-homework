# Домашнє завдання №3. Процеси та ресурси
**Могілда Олександра**

---

## Завдання 1. Огляд активних процесів

### Список всіх процесів
```bash
ps aux
```

### Процес з найбільшим споживанням RAM
```bash
ps aux --sort=-%mem | head -10
```

### PID поточної оболонки
```bash
echo $$
```

---

## Завдання 2. Робота у фоні та керування процесами
```bash
# Запуск у фоні
sleep 1000 &
# [1] 42762

# Перегляд фонових завдань
jobs -l
# [1] + 42762 running sleep 1000

# Повернення на передній план
fg %1

# Зупинка (Ctrl+C), потім примусове завершення
kill -9 42815
# [2] + killed sleep 1000

# Запуск через nohup
nohup sleep 500 &
# appending output to nohup.out
```

---

## Завдання 3. Пріоритети та обмеження
```bash
# Запуск з nice (нижчий пріоритет)
nice -n 15 sleep 300 &
# [1] 43004

# Перевірка пріоритету
ps -o pid,ni,comm -p 43004
#   PID  NI COMM
# 43004  20 sleep

# Зміна пріоритету запущеного процесу
renice -n 10 -p 43004

# Перегляд лімітів ресурсів
ulimit -a
# -t: cpu time (seconds)              unlimited
# -f: file size (blocks)              unlimited
# -d: data seg size (kbytes)          unlimited
# -s: stack size (kbytes)             8176
# -c: core file size (blocks)         0
# -v: address space (kbytes)          unlimited
# -l: locked-in-memory size (kbytes)  unlimited
# -u: processes                       2666
# -n: file descriptors                256
```

---

## Завдання 4. Моніторинг ресурсів
```bash
# Дисковий простір
df -h
# /dev/disk3s1  460Gi  373Gi  33Gi  ...

# Оперативна пам'ять
top -l 1 | grep PhysMem
# PhysMem: 17G used (3471M wired, 8444M compressor), 136M unused.
```
