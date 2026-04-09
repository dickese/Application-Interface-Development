import { Bookmark } from "lucide-react";

const EditorsCard = ({ image, title, time, author, authorImage, description }) => {
  return (
    <div className="flex gap-4 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
      <img
        src={image}
        alt={title}
        className="w-28 h-28 object-cover rounded-xl flex-shrink-0"
      />
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <button className="p-1 border border-gray-200 rounded-lg hover:border-pink-300 transition-colors flex-shrink-0 ml-2">
            <Bookmark className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>
        <span className="text-xs text-pink-500 mb-2">{time}</span>
        <div className="flex items-center gap-2 mb-2">
          <img
            src={authorImage}
            alt={author}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-xs text-gray-600">{author}</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

const EditorsPick = () => {
  const editorsRecipes = [
    {
      image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&q=80",
      title: "Stuffed sticky rice ball",
      time: "34 minutes",
      author: "Jennifer King",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      description: "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
    },
    {
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&q=80",
      title: "Strawberry smoothie",
      time: "40 minutes",
      author: "Matthew Martinez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    },
    {
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
      title: "Latte Art",
      time: "19 minutes",
      author: "Sarah Hill",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    },
    {
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80",
      title: "Butter fried noodles",
      time: "16 minutes",
      author: "Julia Lopez",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
      description: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-2">{"Editor's pick"}</h2>
          <p className="text-gray-500 text-sm">
            Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {editorsRecipes.map((recipe, index) => (
            <EditorsCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;