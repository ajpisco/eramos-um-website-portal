
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Utensils } from "lucide-react";

const LunchMenu = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("today");
  
  // Sample menu data
  const todayMenu = {
    starter: language === 'en' ? 'Garden Salad with Cherry Tomatoes' : 'Salada de Jardim com Tomates Cereja',
    main: language === 'en' ? 'Grilled Chicken with Rice and Vegetables' : 'Frango Grelhado com Arroz e Legumes',
    dessert: language === 'en' ? 'Fresh Fruit Salad' : 'Salada de Frutas Frescas',
    drink: language === 'en' ? 'Natural Juice' : 'Suco Natural'
  };
  
  const weekMenu = [
    {
      day: language === 'en' ? 'Monday' : 'Segunda-feira',
      menu: {
        starter: language === 'en' ? 'Carrot and Cucumber Sticks' : 'Palitos de Cenoura e Pepino',
        main: language === 'en' ? 'Fish Fillet with Mashed Potatoes' : 'Filé de Peixe com Purê de Batatas',
        dessert: language === 'en' ? 'Banana' : 'Banana',
        drink: language === 'en' ? 'Water' : 'Água'
      }
    },
    {
      day: language === 'en' ? 'Tuesday' : 'Terça-feira',
      menu: {
        starter: language === 'en' ? 'Tomato Soup' : 'Sopa de Tomate',
        main: language === 'en' ? 'Beef Steak with Rice and Beans' : 'Bife com Arroz e Feijão',
        dessert: language === 'en' ? 'Apple Slices' : 'Fatias de Maçã',
        drink: language === 'en' ? 'Grape Juice' : 'Suco de Uva'
      }
    },
    {
      day: language === 'en' ? 'Wednesday' : 'Quarta-feira',
      menu: {
        starter: language === 'en' ? 'Mixed Greens Salad' : 'Salada Verde Mista',
        main: language === 'en' ? 'Pasta with Tomato Sauce' : 'Macarrão com Molho de Tomate',
        dessert: language === 'en' ? 'Yogurt' : 'Iogurte',
        drink: language === 'en' ? 'Orange Juice' : 'Suco de Laranja'
      }
    },
    {
      day: language === 'en' ? 'Thursday' : 'Quinta-feira',
      menu: {
        starter: language === 'en' ? 'Vegetable Soup' : 'Sopa de Legumes',
        main: language === 'en' ? 'Grilled Chicken with Roasted Potatoes' : 'Frango Grelhado com Batatas Assadas',
        dessert: language === 'en' ? 'Melon Slices' : 'Fatias de Melão',
        drink: language === 'en' ? 'Apple Juice' : 'Suco de Maçã'
      }
    },
    {
      day: language === 'en' ? 'Friday' : 'Sexta-feira',
      menu: {
        starter: language === 'en' ? 'Beetroot Salad' : 'Salada de Beterraba',
        main: language === 'en' ? 'Fish Sticks with Rice and Peas' : 'Palitos de Peixe com Arroz e Ervilhas',
        dessert: language === 'en' ? 'Orange Slices' : 'Fatias de Laranja',
        drink: language === 'en' ? 'Pineapple Juice' : 'Suco de Abacaxi'
      }
    }
  ];
  
  const nextWeekMenu = [
    {
      day: language === 'en' ? 'Monday' : 'Segunda-feira',
      menu: {
        starter: language === 'en' ? 'Cucumber Salad' : 'Salada de Pepino',
        main: language === 'en' ? 'Chicken Nuggets with Rice' : 'Nuggets de Frango com Arroz',
        dessert: language === 'en' ? 'Pear' : 'Pêra',
        drink: language === 'en' ? 'Water' : 'Água'
      }
    },
    {
      day: language === 'en' ? 'Tuesday' : 'Terça-feira',
      menu: {
        starter: language === 'en' ? 'Pumpkin Soup' : 'Sopa de Abóbora',
        main: language === 'en' ? 'Beef Lasagna' : 'Lasanha de Carne',
        dessert: language === 'en' ? 'Apple Compote' : 'Compota de Maçã',
        drink: language === 'en' ? 'Strawberry Juice' : 'Suco de Morango'
      }
    },
    {
      day: language === 'en' ? 'Wednesday' : 'Quarta-feira',
      menu: {
        starter: language === 'en' ? 'Caesar Salad' : 'Salada Caesar',
        main: language === 'en' ? 'Fish Fillet with Vegetables' : 'Filé de Peixe com Legumes',
        dessert: language === 'en' ? 'Fruit Salad' : 'Salada de Frutas',
        drink: language === 'en' ? 'Lemonade' : 'Limonada'
      }
    },
    {
      day: language === 'en' ? 'Thursday' : 'Quinta-feira',
      menu: {
        starter: language === 'en' ? 'Corn Soup' : 'Sopa de Milho',
        main: language === 'en' ? 'Chicken Stew with Potatoes' : 'Ensopado de Frango com Batatas',
        dessert: language === 'en' ? 'Watermelon Slices' : 'Fatias de Melancia',
        drink: language === 'en' ? 'Passion Fruit Juice' : 'Suco de Maracujá'
      }
    },
    {
      day: language === 'en' ? 'Friday' : 'Sexta-feira',
      menu: {
        starter: language === 'en' ? 'Carrot Salad' : 'Salada de Cenoura',
        main: language === 'en' ? 'Pasta with Meat Sauce' : 'Macarrão com Molho de Carne',
        dessert: language === 'en' ? 'Banana' : 'Banana',
        drink: language === 'en' ? 'Grape Juice' : 'Suco de Uva'
      }
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Utensils className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('lunch.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('lunch.intro')}
            </p>
            
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => setActiveTab("today")} 
                  className={`px-4 py-2 rounded-md ${activeTab === "today" 
                    ? "bg-white shadow" 
                    : "hover:bg-gray-200"}`}
                >
                  {t('lunch.today')}
                </button>
                <button 
                  onClick={() => setActiveTab("week")} 
                  className={`px-4 py-2 rounded-md ${activeTab === "week" 
                    ? "bg-white shadow" 
                    : "hover:bg-gray-200"}`}
                >
                  {t('lunch.week')}
                </button>
                <button 
                  onClick={() => setActiveTab("nextWeek")} 
                  className={`px-4 py-2 rounded-md ${activeTab === "nextWeek" 
                    ? "bg-white shadow" 
                    : "hover:bg-gray-200"}`}
                >
                  {t('lunch.next_week')}
                </button>
              </div>
            </div>
            
            {/* Today's Menu */}
            {activeTab === "today" && (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-bold text-school-blue mb-6 text-center">
                  {t('lunch.today')}
                </h2>
                <div className="space-y-4">
                  <div className="flex border-b pb-3">
                    <span className="w-1/3 font-medium">{language === 'en' ? 'Starter:' : 'Entrada:'}</span>
                    <span className="w-2/3">{todayMenu.starter}</span>
                  </div>
                  <div className="flex border-b pb-3">
                    <span className="w-1/3 font-medium">{language === 'en' ? 'Main:' : 'Prato Principal:'}</span>
                    <span className="w-2/3">{todayMenu.main}</span>
                  </div>
                  <div className="flex border-b pb-3">
                    <span className="w-1/3 font-medium">{language === 'en' ? 'Dessert:' : 'Sobremesa:'}</span>
                    <span className="w-2/3">{todayMenu.dessert}</span>
                  </div>
                  <div className="flex">
                    <span className="w-1/3 font-medium">{language === 'en' ? 'Drink:' : 'Bebida:'}</span>
                    <span className="w-2/3">{todayMenu.drink}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* This Week's Menu */}
            {activeTab === "week" && (
              <div className="space-y-6">
                {weekMenu.map((day, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-school-blue mb-4 border-b pb-2">
                      {day.day}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Starter:' : 'Entrada:'}</span>
                        <span className="w-2/3">{day.menu.starter}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Main:' : 'Prato Principal:'}</span>
                        <span className="w-2/3">{day.menu.main}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Dessert:' : 'Sobremesa:'}</span>
                        <span className="w-2/3">{day.menu.dessert}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Drink:' : 'Bebida:'}</span>
                        <span className="w-2/3">{day.menu.drink}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Next Week's Menu */}
            {activeTab === "nextWeek" && (
              <div className="space-y-6">
                {nextWeekMenu.map((day, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-school-blue mb-4 border-b pb-2">
                      {day.day}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Starter:' : 'Entrada:'}</span>
                        <span className="w-2/3">{day.menu.starter}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Main:' : 'Prato Principal:'}</span>
                        <span className="w-2/3">{day.menu.main}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Dessert:' : 'Sobremesa:'}</span>
                        <span className="w-2/3">{day.menu.dessert}</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 font-medium">{language === 'en' ? 'Drink:' : 'Bebida:'}</span>
                        <span className="w-2/3">{day.menu.drink}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LunchMenu;
