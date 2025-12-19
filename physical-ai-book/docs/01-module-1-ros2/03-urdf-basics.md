# Lesson 1.3: Robot Modeling with URDF 

## Section 1: What is URDF?

**URDF (Unified Robot Description Format)** is an XML format used in ROS to describe all the physical elements of a robot. It's like a blueprint that defines the robot's structure, including its links, joints, sensors, and visual appearance.

A URDF file typically contains:
- **`<robot>`:** The root element of the URDF file.
- **`<link>`:** Describes a rigid body part of the robot (e.g., a wheel, a gripper, the robot's base).
- **`<joint>`:** Defines the relationship between two links, including how they are connected and their range of motion.
- **`<visual>`:** Specifies how the link should look in simulations and visualizations (e.g., its shape, color, and texture).
- **`<collision>`:** Defines the collision geometry of the link, which is used for physics simulations.
- **`<inertial>`:** Describes the inertial properties of the link (mass, center of mass, inertia tensor).

## Section 2: Anatomy of a URDF

### Links
A **link** represents a single rigid body of the robot. Each link has a name and can have `visual`, `collision`, and `inertial` properties.

### Joints
A **joint** connects two links and defines their relative motion. There are several types of joints:
- **`revolute`:** A hinge joint that rotates around a single axis (e.g., a wheel axle).
- **`continuous`:** Similar to a revolute joint, but with no rotation limits.
- **`prismatic`:** A sliding joint that moves along a single axis (e.g., a piston).
- **`fixed`:** A rigid connection between two links that doesn't allow any motion.
- **`floating`:** Allows for motion in all 6 degrees of freedom.
- **`planar`:** Allows for motion in a 2D plane.

Each joint connects a `parent` link to a `child` link and has an `origin` that specifies the transform (position and orientation) of the child link relative to the parent.

## Section 3: XML Code (Simple Box Robot)

Here is a simple URDF example for a robot that is just a single box.

```xml
<?xml version="1.0"?>
<robot name="simple_box">

  <!-- The base link of the robot -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
      <material name="blue">
        <color rgba="0.0 0.0 1.0 1.0"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.5 0.2"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.0"/>
      <inertia ixx="0.04" ixy="0.0" ixz="0.0" iyy="0.04" iyz="0.0" izz="0.02"/>
    </inertial>
  </link>

</robot>
```

### How to View this URDF:
1.  Save the XML code above in a file named `simple_box.urdf`.
2.  Install the `joint_state_publisher` and `robot_state_publisher` packages:
    ```bash
    sudo apt-get install ros-<distro>-joint-state-publisher ros-<distro>-robot-state-publisher
    ```
3.  Create a ROS 2 launch file to visualize the robot in RViz2.
4.  Run the launch file:
    ```bash
    ros2 launch <your_package_name> view_robot.launch.py
    ```
This will open RViz2 and display the simple blue box robot.