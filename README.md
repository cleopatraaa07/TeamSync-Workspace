# TeamSync Workspace

TeamSync Workspace is a modern, mobile-first collaboration platform designed to streamline team communication and productivity. It combines the familiarity of channel-based messaging with powerful features for file management, voice coordination, and direct communication.

Built with **React** and **Tailwind CSS**, it features a sleek, responsive design with full Dark Mode support.

## 🚀 Key Features

*   **Workspace Hub**: Centralized view of all channels (#general, #design-team, #announcements) and direct messages.
*   **Dynamic Channel Chat**: 
    *   Support for read-only channels (e.g., Announcements).
    *   Private/Locked channels (e.g., Project Pegasus).
    *   Rich media messages (Images, System alerts).
    *   Interactive composer (Emoji, Mentions, Attachments).
*   **Direct Messaging (DM)**:
    *   Individual chat history per user.
    *   Real-time status indicators (Online, Busy, Offline).
    *   Quick access to voice/video calls from the DM header.
*   **File Management & Integrations**: 
    *   Searchable repository for shared files (PDFs, Excel, Images).
    *   Status tracking for external integrations (Google Drive, Figma, Slack).
*   **Calls & Meetings**: 
    *   Visual overview of active voice channels.
    *   One-tap "Join" functionality.
*   **User Profile**: 
    *   Editable profile details.
    *   App settings (Notifications, Dark Mode).
    *   Secure Sign Out.

## 💡 Use Cases

### 1. Corporate Announcements
**Scenario**: The HR department needs to broadcast a new policy update to the entire company without getting buried in casual chatter.
**Solution**: The **#announcements** channel is configured as "Read-only" for general users. Admins post updates, and the "2" badge notification ensures everyone sees the unread alerts.

### 2. Design Collaboration
**Scenario**: The UI/UX team needs to share mockups and get quick feedback.
**Solution**: Users navigate to **#design-team**, upload images directly in the chat, and team members can react with emojis or reply inline. The specific context separates this traffic from the main #general chat.

### 3. Remote Project Management
**Scenario**: The "Pegasus" project involves sensitive data and a specific group of developers.
**Solution**: The **#project-pegasus** channel is locked/private. Team members can discuss backend APIs and share internal documents securely within this siloed environment.

### 4. 1:1 Quick Syncs
**Scenario**: You need to ask a colleague, Alicia, about a specific bug before the daily meeting.
**Solution**: Instead of cluttering a public channel, you open a **Direct Message** with Alicia. You can see she is "Online" and send her a message or start a quick video call directly from the header.

### 5. Resource Hub
**Scenario**: A new employee needs to find the brand guidelines and access the team Figma board.
**Solution**: They navigate to the **Files** tab. Using the search bar or the "Integrations" toggle, they can quickly locate the "Design_System.pdf" and see that Figma is connected.

## 🛠 Tech Stack

*   **Frontend Library**: React 19
*   **Styling**: Tailwind CSS (Utility-first framework)
*   **Icons**: Material Symbols Outlined
*   **Typography**: Inter & Plus Jakarta Sans

## 🏃‍♂️ How to Run

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Start the development server: `npm start`
4.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
