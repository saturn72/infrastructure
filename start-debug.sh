#!/bin/bash
echo "Attaching debuggers..."
echo "Attaching VS Code debugger to user-activity-log (Node.js on port 9229)"
echo "Attaching VS Code Java debugger to Keycloak (port 5005)"
# Script to attach debuggers to user-activity-log (Node.js) and Keycloak (Java) running in Docker Compose

echo "To debug all services from the very first line, use the following settings in docker-compose.yml:"
echo
echo "For user-activity-log (Node.js):"
echo "  command: [\"node\", \"--inspect-brk=0.0.0.0:9229\", \"dist/main.js\"]"
echo "  ports:"
echo "    - '9229:9229'"
echo
echo "For Keycloak (Java):"
echo "  JAVA_OPTS_APPEND=-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,address=*:5005"
echo "  ports:"
echo "    - '5005:5005'"
echo
echo "Then run:"
echo "  docker-compose up --build"
echo
echo "Attach your debugger to:"
echo "  Node.js: localhost:9229"
echo "  Java:    localhost:5005"
echo
echo "Both services will pause at the first line until a debugger is attached."
