// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [cartItems, setCartItems] = useState<number>(0);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-600">ArtisanCraft</div>
          
          <nav className="hidden md:flex space-x-8">
            <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap">New Arrivals</button>
            <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap">Collections</button>
            <button className="text-gray-600 hover:text-indigo-600 !rounded-button whitespace-nowrap">Sale</button>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:border-indigo-500 text-sm"
              />
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            </div>
            
            <button className="relative !rounded-button whitespace-nowrap" onClick={() => setIsCartOpen(!isCartOpen)}>
              <i className="fas fa-shopping-cart text-gray-600 text-xl"></i>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <button className="!rounded-button whitespace-nowrap">
              <i className="fas fa-user text-gray-600 text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[600px] bg-cover bg-center" style={{
          backgroundImage: `url('https://public.readdy.ai/ai/img_res/143129fb149a674c6fe6ea62afd15924.jpg')`
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Discover Unique Handcrafted Treasures</h1>
                <p className="text-xl text-gray-600 mb-8">Explore our collection of artisanal pieces, each telling a unique story of craftsmanship and creativity.</p>
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition !rounded-button whitespace-nowrap">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Ceramic Art',
              image: 'https://public.readdy.ai/ai/img_res/1b53d75a9dec0e966061911502a0d247.jpg'
            },
            {
              title: 'Textile Crafts',
              image: 'https://public.readdy.ai/ai/img_res/7d7e098cca5823035ab7dc344b786ef5.jpg'
            },
            {
              title: 'Wood Works',
              image: 'https://public.readdy.ai/ai/img_res/99e80c20a8aa36e4793dd0491c5bf652.jpg'
            }
          ].map((category, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group h-[500px]">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition !rounded-button whitespace-nowrap">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">New Arrivals</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-[300px]">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=elegant handmade craft item on white background, professional product photography, soft lighting, minimal style&width=300&height=300&orientation=squarish&flag=29628fe249cf6c8580c2d1095e52ad23`}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-4 right-4 text-gray-600 hover:text-red-500">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Handcrafted Ceramic Vase</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-indigo-600">$129.99</span>
                    <button 
                      onClick={addToCart}
                      className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Subscribe to receive updates about new products and special offers.</p>
            <form onSubmit={handleSubscribe} className="flex gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full border border-gray-200 w-96 focus:outline-none focus:border-indigo-500"
              />
              <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition !rounded-button whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ArtisanCraft</h3>
            <p className="text-gray-400">Discover unique handcrafted pieces that bring beauty to your everyday life.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-400 hover:text-white !rounded-button whitespace-nowrap">About Us</button></li>
              <li><button className="text-gray-400 hover:text-white !rounded-button whitespace-nowrap">Contact</button></li>
              <li><button className="text-gray-400 hover:text-white !rounded-button whitespace-nowrap">FAQs</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><button className="text-gray-400 hover:text-white !rounded-button whitespace-nowrap">Shipping Policy</button></li>
              <li><button className="text-gray-400 hover:text-white !rounded-button whitespace-nowrap">Returns & Exchanges</button></li>
              <li><button className="text-gray-400 hover:text-white !rounded-button whitespace-nowrap">Size Guide</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white text-xl !rounded-button whitespace-nowrap">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="text-gray-400 hover:text-white text-xl !rounded-button whitespace-nowrap">
                <i className="fab fa-instagram"></i>
              </button>
              <button className="text-gray-400 hover:text-white text-xl !rounded-button whitespace-nowrap">
                <i className="fab fa-pinterest"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
// end
