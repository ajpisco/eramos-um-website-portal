
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { FileText } from "lucide-react";

const Privacy = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <FileText className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('privacy.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {language === 'en' ? (
              <div className="prose max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  Eramos Um School is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website or use our services.
                </p>
                
                <h2>2. Information We Collect</h2>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul>
                  <li>Contact us through our website</li>
                  <li>Sign up for our newsletter</li>
                  <li>Register for school events</li>
                  <li>Submit enrollment applications</li>
                </ul>
                
                <h2>3. How We Use Your Information</h2>
                <p>
                  We may use the information we collect for various purposes, including to:
                </p>
                <ul>
                  <li>Provide and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you administrative information</li>
                  <li>Send you marketing and promotional communications</li>
                </ul>
                
                <h2>4. Disclosure of Your Information</h2>
                <p>
                  We do not share your personal information with third parties except as described in this Privacy Policy.
                </p>
                
                <h2>5. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your personal information.
                </p>
              </div>
            ) : (
              <div className="prose max-w-none">
                <h2>1. Introdução</h2>
                <p>
                  A Escola Eramos Um está comprometida em proteger sua privacidade. Esta Política de Privacidade
                  explica como coletamos, usamos, divulgamos e protegemos suas informações quando
                  você visita nosso site ou usa nossos serviços.
                </p>
                
                <h2>2. Informações que Coletamos</h2>
                <p>
                  Podemos coletar informações pessoais que você fornece voluntariamente quando:
                </p>
                <ul>
                  <li>Entra em contato conosco através do nosso site</li>
                  <li>Inscreve-se em nossa newsletter</li>
                  <li>Registra-se para eventos escolares</li>
                  <li>Envia aplicações de matrícula</li>
                </ul>
                
                <h2>3. Como Usamos Suas Informações</h2>
                <p>
                  Podemos usar as informações que coletamos para vários propósitos, incluindo:
                </p>
                <ul>
                  <li>Fornecer e manter nossos serviços</li>
                  <li>Responder às suas perguntas e solicitações</li>
                  <li>Enviar informações administrativas</li>
                  <li>Enviar comunicações de marketing e promocionais</li>
                </ul>
                
                <h2>4. Divulgação de Suas Informações</h2>
                <p>
                  Não compartilhamos suas informações pessoais com terceiros, exceto conforme descrito nesta Política de Privacidade.
                </p>
                
                <h2>5. Segurança de Suas Informações</h2>
                <p>
                  Usamos medidas de segurança administrativas, técnicas e físicas para proteger suas informações pessoais.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
