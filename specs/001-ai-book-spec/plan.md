# Implementation Plan: Physical AI Textbook Structure

**Feature Branch**: `001-ai-book-spec`
**Status**: Draft
**Author**: Gemini

## 1. Technical Context & Decisions

This plan outlines the steps to build the initial structure and content for the "Physical AI & Humanoid Robotics" textbook using Docusaurus.

*   **Framework**: Docusaurus (classic theme) will be used for its documentation-focused features, Markdown support, and extensibility.
*   **Hosting**: [NEEDS CLARIFICATION: Where will the Docusaurus site be deployed? (e.g., GitHub Pages, Netlify, Vercel)]
*   **Content**: The initial focus is on creating the structure and content for Module 1, as defined in the specification.

## 2. Implementation Phases

### Phase 1: Project Skeleton

**Goal**: Initialize a new Docusaurus project and clean up the default template.

*   **Step 1.1: Initialize Docusaurus**
    *   Use `npx create-docusaurus@latest physical-ai-book classic` to scaffold a new project.
*   **Step 1.2: Clean Up Default Files**
    *   Remove the default `docs/` and `blog/` directories.
    *   Delete the `src/pages/index.js` and `src/pages/markdown-page.md` files.
*   **Step 1.3: Configure `docusaurus.config.js`**
    *   Update `title`, `tagline`, and `url`.
    *   Configure the `navbar` and `footer` items.
    *   Set up the `sidebarPath` to point to a custom `sidebars.js` file.

### Phase 2: File Structure

**Goal**: Create the directory structure for Module 1.

*   **Step 2.1: Create Module Directory**
    *   Create the directory `docs/01-module-1-ros2`.
*   **Step 2.2: Create Category File**
    *   Create `docs/01-module-1-ros2/_category_.json` with the following content to define the sidebar position and label:
        ```json
        {
          "label": "Module 1: The Robotic Nervous System (ROS 2)",
          "position": 1
        }
        ```

### Phase 3: Content Generation

**Goal**: Create the markdown files for the lessons in Module 1.

*   **Step 3.1: Create Lesson 1.1 File**
    *   Create `docs/01-module-1-ros2/01-nodes-intro.md`.
    *   Populate the file with the content for "Hello Robot - Understanding ROS 2 Nodes" as described in the spec, following the "Recipe" format.
*   **Step 3.2: Create Lesson 1.2 File**
    *   Create `docs/01-module-1-ros2/02-topics-services.md`.
    *   Populate the file with the content for "The Messenger - Topics & Services" as described in the spec.
*   **Step 3.3: Create Lesson 1.3 File**
    *   Create `docs/01-module-1-ros2/03-urdf-basics.md`.
    *   Populate the file with the content for "The Body Blueprint - Intro to URDF" as described in the spec.

## 3. Constitution Check

*   **Hands-On First**: The plan prioritizes creating hands-on content in Phase 3.
*   **Simplicity and Clarity**: The "Recipe" format for lessons ensures clarity.
*   **Modularity and Reusability**: The file-based structure in Docusaurus promotes modularity.
*   **Openness and Collaboration**: The project will be managed in a Git repository.

## 4. Next Steps

*   Execute Phase 1 to set up the Docusaurus project.
*   Proceed with Phase 2 and 3 to build out the content.
*   Resolve the [NEEDS CLARIFICATION] point about deployment.