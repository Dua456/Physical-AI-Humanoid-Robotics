# Lesson 1.1: Introduction to Nodes 

## Section 1: Theory

In ROS 2, a **node** is the fundamental building block for creating a robotic application. Think of a node as a small, independent program that performs a specific task. For example, you might have one node for controlling the robot's wheels, another for processing camera data, and a third for planning a path.

Each node in a ROS 2 system can:
- Be written in different programming languages (like Python, C++, etc.).
- Run on different computers, allowing for distributed systems.
- Communicate with other nodes using ROS 2's communication protocols (like topics, services, and actions).

By breaking down a complex robotics task into smaller, manageable nodes, you can create a system that is modular, scalable, and easy to debug.

## Section 2: Code Example

Here is a simple "Hello World" program in Python using `rclpy` (the ROS 2 client library for Python). This code creates a node that prints "Hello World" to the console every second.

```python
import rclpy
from rclpy.node import Node

class HelloWorldNode(Node):
    def __init__(self):
        super().__init__('hello_world_node')
        self.timer = self.create_timer(1.0, self.timer_callback)

    def timer_callback(self):
        self.get_logger().info('Hello World')

def main(args=None):
    rclpy.init(args=args)
    node = HelloWorldNode()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Code Breakdown:
- **`rclpy.init()`**: Initializes the ROS 2 client library.
- **`HelloWorldNode(Node)`**: Defines a class that inherits from `rclpy.node.Node`.
- **`super().__init__('hello_world_node')`**: Initializes the node with the name `hello_world_node`.
- **`self.create_timer(1.0, self.timer_callback)`**: Creates a timer that calls the `timer_callback` function every 1.0 second.
- **`self.get_logger().info('Hello World')`**: Logs the "Hello World" message.
- **`rclpy.spin(node)`**: Keeps the node running until it's interrupted (e.g., by pressing Ctrl+C).
- **`node.destroy_node()` and `rclpy.shutdown()`**: Cleans up the node and shuts down the ROS 2 client library.

## Section 3: How to Run

1.  **Save the code:** Save the code above in a file named `hello_world.py` inside a ROS 2 package.

2.  **Build the package:** Navigate to your ROS 2 workspace and build the package containing `hello_world.py`.
    ```bash
    colcon build
    ```

3.  **Source the workspace:**
    ```bash
    source install/setup.bash
    ```

4.  **Run the node:** Use the `ros2 run` command to execute the node.
    ```bash
    ros2 run <your_package_name> hello_world
    ```

You should now see the "Hello World" message printed to your terminal every second. To stop the node, press `Ctrl+C`.