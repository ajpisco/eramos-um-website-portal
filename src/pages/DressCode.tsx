import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Shirt, ShoppingCart, Download, Store, ExternalLink } from "lucide-react";

const DressCode = () => {
  const { t } = useLanguage();

  const uniformItems = [
    { name: t('dress.uniform.polo'), description: t('dress.uniform.polo_desc'), image: "/images/uniform/polo.jpg" },
    { name: t('dress.uniform.tshirt'), description: t('dress.uniform.tshirt_desc'), image: "/images/uniform/tshirt.jpg" },
    { name: t('dress.uniform.pants'), description: t('dress.uniform.pants_desc'), image: "/images/uniform/pants.jpg" },
    { name: t('dress.uniform.jacket'), description: t('dress.uniform.jacket_desc'), image: "/images/uniform/jacket.jpg" },
  ];

  const storeAddress = "Rua do Moinho, Bairro do Moinho Lote 10, 2785-278 São Domingos de Rana";
  const storeWebsite = "https://funnypaper.pt"; // Assuming https for the website

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Shirt className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('dress.title')}</span>
            </h1>
          </div>

          <section className="bg-white p-8 rounded-lg shadow-md mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('dress.intro')}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-school-blue mb-6 text-center">
              {t('dress.requirements')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {uniformItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-contain rounded-md mr-6" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Purchase Information Section */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <ShoppingCart className="h-8 w-8 text-school-blue mr-3" />
              <h2 className="text-2xl font-serif font-bold text-school-blue">
                {t('dress.purchase_title')}
              </h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              {t('dress.purchase_info')}
            </p>

            {/* Funny Paper Store Details */}
            <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center mb-3">
                 <Store className="h-6 w-6 text-school-blue-dark mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">{t('dress.store_name')}</h3>
              </div> 
              <p className="text-gray-700 mb-2">
                <span className="font-medium">{t('dress.store_address_label')}</span> {storeAddress}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">{t('dress.store_website_label')}</span> 
                <a 
                  href={storeWebsite} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-school-blue hover:underline ml-1"
                >
                  {storeWebsite} <ExternalLink className="inline-block h-4 w-4 ml-1" />
                </a>
              </p>
            </div>

            {/* Download Order Form Button */}
            <div>
              <p className="text-gray-700 mb-3">{t('dress.order_form_description')}</p>
              <a
                href="/downloads/20240712163010_Formulário_encomenda_Éramos_Um.pdf"
                download="Formulario_Encomenda_Uniforme.pdf"
                className="inline-flex items-center px-8 py-3 bg-school-blue text-white font-semibold rounded-lg shadow-md hover:bg-school-blue-dark transition-colors duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('dress.order_form_button')}
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default DressCode;
