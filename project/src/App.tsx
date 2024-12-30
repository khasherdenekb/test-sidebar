import { RegistrationDialog } from "./components/registration-dialog";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
          <p className="text-gray-500">Join thousands of users today</p>
        </div>
        <RegistrationDialog />
      </div>
    </div>
  );
}