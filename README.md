# Project Tracker Frontend

A Vue.js frontend application for the Project Tracker MVP system.

## Features

- **User Authentication** with JWT tokens
- **Role-based Access Control** (Project Manager vs Team Member)
- **Project Management** - Create, view, and manage projects
- **Task Management** - Create, assign, and track tasks
- **Dashboard** with real-time statistics
- **Responsive Design** that works on all devices

## Tech Stack

- **Vue 3** with Composition API
- **Pinia** for state management
- **Vue Router** for navigation
- **Axios** for API calls
- **Tailwind CSS** for styling
- **Vite** for build tooling

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd project-tracker-frontend
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create environment file
\`\`\`bash
cp .env.example .env
\`\`\`

4. Update the `.env` file with your API URL

5. Start the development server
\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:3000`

## Project Structure

\`\`\`
src/
├── assets/          # Static assets
├── components/      # Reusable components
│   ├── auth/       # Authentication components
│   ├── common/     # Common UI components
│   ├── dashboard/  # Dashboard components
│   ├── projects/   # Project-related components
│   └── tasks/      # Task-related components
├── composables/    # Vue composables
├── router/         # Vue Router configuration
├── services/       # API services
├── store/          # Pinia stores
├── utils/          # Utility functions
└── views/          # Page components
\`\`\`

## API Integration

The frontend integrates with the Spring Boot backend through these endpoints:

- `POST /auth/login` - User authentication
- `GET /projects` - Fetch projects
- `POST /projects` - Create project
- `GET /tasks` - Fetch tasks
- `POST /tasks` - Create task
- `PATCH /tasks/{id}/status` - Update task status
- `GET /dashboard` - Dashboard statistics

## Building for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
