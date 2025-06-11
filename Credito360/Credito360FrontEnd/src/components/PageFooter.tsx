import { Link } from "react-router-dom";

const PageFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              Crédito360
            </div>
            <p className="text-gray-400">
              Conectando você às melhores oportunidades de crédito do mercado.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/como-funciona" className="hover:text-white transition-colors">Como funciona</Link></li>
              <li><Link to="/seguranca" className="hover:text-white transition-colors">Segurança</Link></li>
              <li><Link to="/parceiros" className="hover:text-white transition-colors">Parceiros</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/sobre-nos" className="hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link to="/carreiras" className="hover:text-white transition-colors">Carreiras</Link></li>
              <li><Link to="/imprensa" className="hover:text-white transition-colors">Imprensa</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/central-ajuda" className="hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/status" className="hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Crédito360. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter; 