import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { FileText } from "lucide-react";

const Terms = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <FileText className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('terms.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {language === 'en' ? (
              <>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.intro')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome to the Éramos Um website. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Éramos Um if you do not agree to take all of the terms and conditions stated on this page.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.definitions')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Portugal. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.use')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You may access this from Éramos Um for your own personal use subjected to restrictions set in these terms and conditions. You must not: Republish material from Éramos Um; Sell, rent or sub-license material from Éramos Um; Reproduce, duplicate or copy material from Éramos Um; Redistribute content from Éramos Um.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.privacy')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Please read our Privacy Policy.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.limitations')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    In no event shall Éramos Um, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Éramos Um, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.intro')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Bem-vindo ao site Éramos Um. Estes termos e condições descrevem as regras e regulamentos para o uso do nosso site. Ao aceder a este site, presumimos que aceita estes termos e condições. Não continue a usar Éramos Um se não concordar com todos os termos e condições declarados nesta página.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.definitions')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    A terminologia seguinte aplica-se a estes Termos e Condições, Declaração de Privacidade e Aviso de Isenção de Responsabilidade e todos os Acordos: "Cliente", "Você" e "Seu" refere-se a si, a pessoa que acede a este site e cumpre os termos e condições da Empresa. "A Empresa", "Nós", "Nosso" e "Nos", refere-se à nossa Empresa. "Parte", "Partes", ou "Nós", refere-se tanto ao Cliente como a nós. Todos os termos referem-se à oferta, aceitação e consideração do pagamento necessário para empreender o processo da nossa assistência ao Cliente da maneira mais apropriada para o propósito expresso de atender às necessidades do Cliente em relação à prestação dos serviços declarados da Empresa, de acordo com e sujeito à lei vigente de Portugal. Qualquer uso da terminologia acima ou outras palavras no singular, plural, maiúsculas e/ou ele/ela ou eles, são considerados intercambiáveis e, portanto, como referindo-se ao mesmo.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.use')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Pode aceder a isto a partir de Éramos Um para seu uso pessoal, sujeito às restrições estabelecidas nestes termos e condições. Não deve: Republicar material de Éramos Um; Vender, alugar ou sublicenciar material de Éramos Um; Reproduzir, duplicar ou copiar material de Éramos Um; Redistribuir conteúdo de Éramos Um.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.privacy')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Por favor, leia a nossa Política de Privacidade.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.limitations')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Em nenhum caso a Éramos Um, nem qualquer um dos seus administradores, diretores e funcionários, será responsabilizada por qualquer coisa decorrente ou de qualquer forma relacionada com o seu uso deste Site, quer tal responsabilidade seja contratual. A Éramos Um, incluindo os seus administradores, diretores e funcionários, não será responsabilizada por qualquer responsabilidade indireta, consequencial ou especial decorrente ou de qualquer forma relacionada com o seu uso deste Site.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
