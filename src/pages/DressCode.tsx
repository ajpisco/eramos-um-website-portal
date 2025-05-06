import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Shirt, ShoppingBag } from "lucide-react";

const DressCode = () => {
  const { t, language } = useLanguage();

  const uniformItems = [
    {
      name: language === 'en' ? 'School Polo Shirt (Blue)' : 'Camisa Polo da Escola (Azul)',
      description: language === 'en' 
        ? 'Official school polo shirt with embroidered logo.' 
        : 'Camisa polo oficial da escola com logo bordado.'
    },
    {
      name: language === 'en' ? 'School T-Shirt (White)' : 'Camiseta da Escola (Branca)',
      description: language === 'en' 
        ? 'White cotton t-shirt with printed school logo for physical education.' 
        : 'Camiseta branca de algodão com logo da escola impresso para educação física.'
    },
    {
      name: language === 'en' ? 'Navy Blue Pants/Shorts' : 'Calça/Shorts Azul Marinho',
      description: language === 'en' 
        ? 'Navy blue pants or shorts with the school logo.' 
        : 'Calça ou shorts azul marinho com o logo da escola.'
    },
    {
      name: language === 'en' ? 'School Jacket' : 'Jaqueta da Escola',
      description: language === 'en' 
        ? 'Navy blue jacket with the school logo for colder days.' 
        : 'Jaqueta azul marinho com o logo da escola para dias mais frios.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Shirt className="h-10 w-10 text-school-blue-dark mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue-dark">{t('dress.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('dress.intro')}
            </p>
            
            {/* Dress Code Policy */}
            <section className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-6">
                {t('dress.policy')}
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'All students are required to wear the official school uniform during school hours and school-sponsored events. The uniform helps promote a sense of equality and belonging among our students.'
                    : 'Todos os alunos devem usar o uniforme escolar oficial durante o horário escolar e eventos patrocinados pela escola. O uniforme ajuda a promover um senso de igualdade e pertencimento entre nossos alunos.'}
                </p>
                
                <h3 className="text-xl font-semibold text-school-blue-dark">
                  {language === 'en' ? 'Required Items:' : 'Itens Obrigatórios:'}
                </h3>
                
                <ul className="space-y-4">
                  {uniformItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-school-green-dark mr-2">•</span>
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold text-school-blue-dark">
                  {language === 'en' ? 'Additional Guidelines:' : 'Diretrizes Adicionais:'}
                </h3>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-school-green-dark mr-2">•</span>
                    <span>
                      {language === 'en'
                        ? 'Shoes should be comfortable and appropriate for school activities.'
                        : 'Os calçados devem ser confortáveis e apropriados para atividades escolares.'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-green-dark mr-2">•</span>
                    <span>
                      {language === 'en'
                        ? 'Jewelry should be minimal and not distracting.'
                        : 'Joias devem ser mínimas e não chamar a atenção.'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-green-dark mr-2">•</span>
                    <span>
                      {language === 'en'
                        ? 'Hair should be neat and natural in color.'
                        : 'O cabelo deve ser arrumado e de cor natural.'}
                    </span>
                  </li>
                </ul>
              </div>
            </section>
            
            {/* Where to Buy */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-6">
                {t('dress.purchase_title')}
              </h2>
              
              <p className="text-gray-700 mb-6">
                {t('dress.purchase_info')}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">
                  {language === 'en' ? 'Uniforms & More' : 'Uniformes & Mais'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-medium w-20">{language === 'en' ? 'Address:' : 'Endereço:'}</span>
                    <span>Av. das Escolas, 456 - Centro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-20">{language === 'en' ? 'Phone:' : 'Telefone:'}</span>
                    <span>(11) 3333-4444</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-20">{language === 'en' ? 'Website:' : 'Site:'}</span>
                    <a href="#" className="text-school-blue hover:underline">www.uniformesemais.com.br</a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  {language === 'en' ? 'Shop Online' : 'Comprar Online'}
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DressCode;
