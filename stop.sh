
#!/bin/bash

# Find and kill all node and bun processes
echo "Stopping all node and bun processes..."
pkill -f node
pkill -f bun
echo "All processes stopped."
