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
              <>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.intro')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Your privacy is important to us. This Privacy Policy explains how Éramos Um collects, uses, discloses, and safeguards your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.info')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                    <li>{t('privacy.section.info.contact_us')}</li>
                    <li>{t('privacy.section.info.newsletter')}</li>
                    <li>{t('privacy.section.info.events')}</li>
                    <li>{t('privacy.section.info.enrollment')}</li>
                  </ul>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.use')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                    <li>{t('privacy.section.use.provide_services')}</li>
                    <li>{t('privacy.section.use.respond_inquiries')}</li>
                    <li>{t('privacy.section.use.send_admin_info')}</li>
                    <li>{t('privacy.section.use.send_marketing')}</li>
                  </ul>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.disclosure')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may share information we have collected about you in certain situations. Your information may be disclosed as follows: to comply with legal process; to respond to legal requests; or to protect the rights, property, and safety of others.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.security')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.intro')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    A sua privacidade é importante para nós. Esta Política de Privacidade explica como Éramos Um recolhe, usa, divulga e protege as suas informações quando visita o nosso site e usa os nossos serviços. Por favor, leia esta política de privacidade com atenção. Se não concordar com os termos desta política de privacidade, por favor, não aceda ao site.
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.info')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Podemos recolher informações sobre si de várias maneiras. As informações que podemos recolher no Site incluem:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                    <li>{t('privacy.section.info.contact_us')}</li>
                    <li>{t('privacy.section.info.newsletter')}</li>
                    <li>{t('privacy.section.info.events')}</li>
                    <li>{t('privacy.section.info.enrollment')}</li>
                  </ul>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.use')}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Ter informações precisas sobre si permite-nos fornecer uma experiência tranquila, eficiente e personalizada. Especificamente, podemos usar as informações recolhidas sobre si através do Site para:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                    <li>{t('privacy.section.use.provide_services')}</li>
                    <li>{t('privacy.section.use.respond_inquiries')}</li>
                    <li>{t('privacy.section.use.send_admin_info')}</li>
                    <li>{t('privacy.section.use.send_marketing')}</li>
                  </ul>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.disclosure')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Podemos partilhar informações que recolhemos sobre si em determinadas situações. As suas informações podem ser divulgadas da seguinte forma: para cumprir processos legais; para responder a solicitações legais; ou para proteger os direitos, propriedade e segurança de outros.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('privacy.section.security')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Utilizamos medidas de segurança administrativas, técnicas e físicas para ajudar a proteger as suas informações pessoais. Embora tenhamos tomado medidas razoáveis para proteger as informações pessoais que nos fornece, esteja ciente de que, apesar dos nossos esforços, nenhuma medida de segurança é perfeita ou impenetrável, e nenhum método de transmissão de dados pode ser garantido contra qualquer interceção ou outro tipo de uso indevido.
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

export default Privacy;
