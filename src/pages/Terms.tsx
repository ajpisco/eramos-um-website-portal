
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
              <div className="prose max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  These Terms of Service govern your use of the Eramos Um School website 
                  and the services we provide. By using our website, you agree to these terms.
                </p>
                
                <h2>2. Definitions</h2>
                <p>
                  "School," "we," "us," and "our" refer to Eramos Um School.
                  "Website" refers to our website located at www.eramosum.edu.br.
                  "Services" refers to the educational services provided by Eramos Um School.
                  "You" and "your" refer to you, as a user of our website or services.
                </p>
                
                <h2>3. Website Use</h2>
                <p>
                  The content of our website is for general information and use only.
                  We reserve the right to make changes to our website without notice.
                </p>
                
                <h2>4. Privacy</h2>
                <p>
                  Your use of our website is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                
                <h2>5. Limitations of Liability</h2>
                <p>
                  While we strive to provide accurate information, we make no warranties about the completeness, reliability, or accuracy of the information on our website.
                </p>
              </div>
            ) : (
              <div className="prose max-w-none">
                <h2>1. Introdução</h2>
                <p>
                  Estes Termos de Serviço regem o uso do site da Escola Eramos Um
                  e os serviços que fornecemos. Ao usar nosso site, você concorda com estes termos.
                </p>
                
                <h2>2. Definições</h2>
                <p>
                  "Escola," "nós," e "nosso" referem-se à Escola Eramos Um.
                  "Site" refere-se ao nosso site localizado em www.eramosum.edu.br.
                  "Serviços" refere-se aos serviços educacionais fornecidos pela Escola Eramos Um.
                  "Você" e "seu" referem-se a você, como usuário do nosso site ou serviços.
                </p>
                
                <h2>3. Uso do Site</h2>
                <p>
                  O conteúdo do nosso site é apenas para informação geral e uso.
                  Reservamo-nos o direito de fazer alterações em nosso site sem aviso prévio.
                </p>
                
                <h2>4. Privacidade</h2>
                <p>
                  O uso do nosso site também é regido por nossa Política de Privacidade, que está incorporada a estes Termos por referência.
                </p>
                
                <h2>5. Limitações de Responsabilidade</h2>
                <p>
                  Embora nos esforcemos para fornecer informações precisas, não oferecemos garantias sobre a integridade, confiabilidade ou precisão das informações em nosso site.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
