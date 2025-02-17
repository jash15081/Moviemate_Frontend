import AuthModal from "../components/AuthModel.jsx"

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AuthModal isOpen={true} />
    </div>
  )
}

