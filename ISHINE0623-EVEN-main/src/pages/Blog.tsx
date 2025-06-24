import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search, TrendingUp, Clock, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Industry Insights',
    'Technology',
    'Manufacturing',
    'Market Trends',
    'OEM/ODM',
    'Product Updates',
    'Success Stories'
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of IPL Technology: 2024 Market Trends and Innovations',
    excerpt: 'Discover the latest trends shaping the IPL hair removal industry, from AI-powered skin analysis to sustainable manufacturing practices.',
    content: 'The IPL industry is experiencing unprecedented growth with revolutionary technologies...',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Technology Officer',
    authorImage: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Industry Insights',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2847,
    comments: 23,
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How Ice Cooling Technology is Revolutionizing IPL Treatments',
      excerpt: 'Learn how advanced cooling systems are making IPL treatments more comfortable and effective than ever before.',
      author: 'Michael Zhang',
      authorRole: 'Product Manager',
      authorImage: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1923,
      comments: 15
    },
    {
      id: 3,
      title: 'OEM vs ODM: Choosing the Right Manufacturing Partnership',
      excerpt: 'Understanding the differences between OEM and ODM services to make the best decision for your beauty brand.',
      author: 'Lisa Wang',
      authorRole: 'Business Development Director',
      authorImage: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'OEM/ODM',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1654,
      comments: 12
    },
    {
      id: 4,
      title: 'Smart App Integration: The Next Generation of IPL Devices',
      excerpt: 'Explore how mobile app connectivity is enhancing user experience and brand engagement in IPL devices.',
      author: 'David Kim',
      authorRole: 'Software Engineer',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 2156,
      comments: 18
    },
    {
      id: 5,
      title: 'Sustainable Manufacturing: Our Commitment to Green Production',
      excerpt: 'Discover how iShine is leading the industry in sustainable manufacturing practices and eco-friendly packaging.',
      author: 'Emma Rodriguez',
      authorRole: 'Sustainability Manager',
      authorImage: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Manufacturing',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1432,
      comments: 9
    },
    {
      id: 6,
      title: 'Case Study: How KU-2 Beauty Achieved 500% Growth with Our IPL Devices',
      excerpt: 'A detailed look at how strategic OEM partnership helped KU-2 Beauty dominate the Asian market.',
      author: 'James Liu',
      authorRole: 'Account Manager',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Success Stories',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 3241,
      comments: 27
    },
    {
      id: 7,
      title: 'Global IPL Market Analysis: Opportunities and Challenges in 2024',
      excerpt: 'Comprehensive analysis of the global IPL market, emerging opportunities, and key challenges for manufacturers.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Technology Officer',
      authorImage: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2024-01-01',
      readTime: '9 min read',
      category: 'Market Trends',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1876,
      comments: 14
    }
  ];

  const trendingTopics = [
    'IPL Technology Advances',
    'Sustainable Manufacturing',
    'Smart Device Integration',
    'Market Expansion Strategies',
    'Quality Assurance Standards'
  ];

  const recentComments = [
    {
      author: 'Beauty Brand CEO',
      comment: 'Great insights on market trends...',
      post: 'The Future of IPL Technology',
      time: '2 hours ago'
    },
    {
      author: 'Manufacturing Partner',
      comment: 'This helped us understand OEM vs ODM...',
      post: 'OEM vs ODM Guide',
      time: '5 hours ago'
    },
    {
      author: 'Tech Enthusiast',
      comment: 'Amazing cooling technology explanation...',
      post: 'Ice Cooling Revolution',
      time: '1 day ago'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Breadcrumbs 
        backgroundImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      {/* Blog Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              iShine Technology Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in IPL technology and manufacturing.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center mb-6">
                  <img
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                    <div className="text-sm text-gray-500">{featuredPost.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {featuredPost.views.toLocaleString()} views
                  </div>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center mb-4">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.authorRole}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </div>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex space-x-2">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Previous</button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700">2</button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700">3</button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Next</button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Trending Topics
                </h3>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                      <span className="text-blue-600 mr-2">#{index + 1}</span>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Comments */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Comments</h3>
                <div className="space-y-4">
                  {recentComments.map((comment, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="font-semibold text-gray-900 text-sm">{comment.author}</div>
                      <div className="text-gray-600 text-sm mb-1">{comment.comment}</div>
                      <div className="text-xs text-gray-500">on "{comment.post}" • {comment.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-600 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                <p className="mb-4">Get the latest insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded text-gray-900"
                  />
                  <button className="w-full bg-white text-blue-600 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your IPL Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert insights and personalized guidance for your IPL manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;