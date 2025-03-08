
#!/bin/bash

# Create a process ID file directory if it doesn't exist
mkdir -p ./.pid

# Find and kill all node and bun processes started by the run command
echo "Stopping all application processes..."

# Kill processes and record exit status
kill_status=0

# Kill any node processes
if pgrep -f "node" > /dev/null; then
  pkill -f "node" && echo "Node processes stopped."
  kill_status=$((kill_status + $?))
fi

# Kill any bun processes
if pgrep -f "bun" > /dev/null; then
  pkill -f "bun" && echo "Bun processes stopped."
  kill_status=$((kill_status + $?))
fi

# Clean up any stray vite processes
if pgrep -f "vite" > /dev/null; then
  pkill -f "vite" && echo "Vite processes stopped."
  kill_status=$((kill_status + $?))
fi

if [ $kill_status -eq 0 ]; then
  echo "All processes successfully stopped."
else
  echo "Warning: Some processes may still be running."
  echo "You may need to restart your Repl if you encounter issues."
fi
