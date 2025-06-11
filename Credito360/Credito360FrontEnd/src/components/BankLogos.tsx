interface LogoProps {
  className?: string;
}

export const BanrisulLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/banrisul.png" 
      alt="Banrisul" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        // Fallback para SVG se a imagem não carregar
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-blue-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">BR</span>
          </div>
        `;
      }}
    />
  </div>
);

export const SicrediLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/sicredi.png" 
      alt="Sicredi" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-green-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">SC</span>
          </div>
        `;
      }}
    />
  </div>
);

export const MercadoPagoLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/mercado-pago.png" 
      alt="Mercado Pago" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-blue-500 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">MP</span>
          </div>
        `;
      }}
    />
  </div>
);

export const BancoDoBrasilLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/banco-do-brasil.png" 
      alt="Banco do Brasil" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-yellow-500 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">BB</span>
          </div>
        `;
      }}
    />
  </div>
);

export const DefaultBankLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
    </svg>
  </div>
);

export const ItauLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/itau.png" 
      alt="Itaú" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-orange-500 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">IT</span>
          </div>
        `;
      }}
    />
  </div>
);

export const NubankLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/nubank.png" 
      alt="Nubank" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-purple-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">NU</span>
          </div>
        `;
      }}
    />
  </div>
);

export const SantanderLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/santander.png" 
      alt="Santander" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-red-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">ST</span>
          </div>
        `;
      }}
    />
  </div>
);

export const BradescoLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/bradesco.png" 
      alt="Bradesco" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-red-700 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">BD</span>
          </div>
        `;
      }}
    />
  </div>
);

export const BancoInterLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/banco-inter.png" 
      alt="Banco Inter" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-orange-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">BI</span>
          </div>
        `;
      }}
    />
  </div>
);

export const PagBankLogo = ({ className = "h-12 w-12" }: LogoProps) => (
  <div className={`${className} rounded-full overflow-hidden bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center`}>
    <img 
      src="/images/logos/pagbank.png" 
      alt="PagBank" 
      className="w-full h-full object-contain p-1"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.parentElement!.innerHTML = `
          <div class="w-full h-full bg-blue-700 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-xs">PB</span>
          </div>
        `;
      }}
    />
  </div>
); 