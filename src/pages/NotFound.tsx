import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
        <AlertTriangle className="w-24 h-24 text-yellow-400 mb-8" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('notfound.title')}</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          {t('notfound.message')}
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-school-blue text-white font-semibold rounded-lg shadow-md hover:bg-school-blue-dark transition-colors duration-300"
        >
          {t('notfound.button')}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
