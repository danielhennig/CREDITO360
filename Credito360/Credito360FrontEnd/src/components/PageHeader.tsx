import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="transition-transform duration-300 hover:scale-110">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent cursor-pointer">
              Crédito360
            </div>
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link to="/cadastro">Criar Conta</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader; 