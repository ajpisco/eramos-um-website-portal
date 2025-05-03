
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(language === 'en' ? "Message sent successfully!" : "Mensagem enviada com sucesso!");
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-12">
            <span className="text-school-blue">{t('contact.title')}</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t('contact.form.name')}
                  </label>
                  <Input 
                    id="name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t('contact.form.email')}
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t('contact.form.message')}
                  </label>
                  <Textarea 
                    id="message"
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="bg-school-blue hover:bg-school-blue-dark text-white w-full"
                >
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-school-green mb-6">
                {t('contact.info')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-school-blue mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Eramos Um</p>
                    <p>Rua dos Exemplos, 123</p>
                    <p>São Paulo - SP</p>
                    <p>CEP: 01234-567</p>
                    <p>Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-school-blue mr-4" />
                  <div>
                    <p>(11) 5555-1234</p>
                    <p>(11) 5555-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-school-blue mr-4" />
                  <p>contato@eramosum.edu.br</p>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098370227214!2d-46.65390388502164!3d-23.56518478468939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brazil!5e0!3m2!1sen!2suk!4v1607597790921!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}
                  title="School Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
