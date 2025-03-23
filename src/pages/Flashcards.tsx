
import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Bookmark, ArrowLeftRight, Check, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Flashcard {
  id: number;
  term: string;
  definition: string;
  category: string;
}

const flashcards: Record<string, Flashcard[]> = {
  "Terminology": [
    {
      id: 1,
      term: "Applied Behavior Analysis (ABA)",
      definition: "A scientific approach that applies principles of learning theory to improve socially significant behavior.",
      category: "Terminology",
    },
    {
      id: 2,
      term: "Antecedent",
      definition: "An environmental event, stimulus, or condition that precedes a behavior.",
      category: "Terminology",
    },
    {
      id: 3,
      term: "Behavior",
      definition: "An observable and measurable act of an individual.",
      category: "Terminology",
    },
    {
      id: 4,
      term: "Consequence",
      definition: "An environmental event, stimulus, or condition that follows a behavior.",
      category: "Terminology",
    },
    {
      id: 5,
      term: "Reinforcement",
      definition: "A process that increases the future frequency of a behavior.",
      category: "Terminology",
    },
  ],
  "Assessment": [
    {
      id: 6,
      term: "Functional Behavior Assessment (FBA)",
      definition: "A process for determining the function or purpose that a behavior serves for an individual.",
      category: "Assessment",
    },
    {
      id: 7,
      term: "Preference Assessment",
      definition: "A procedure used to determine potential reinforcers by systematically presenting various stimuli.",
      category: "Assessment",
    },
    {
      id: 8,
      term: "Task Analysis",
      definition: "Breaking complex skills into smaller, teachable components.",
      category: "Assessment",
    },
    {
      id: 9,
      term: "Discrete Trial Training (DTT)",
      definition: "A structured teaching format involving a clear beginning, middle, and end.",
      category: "Assessment",
    },
    {
      id: 10,
      term: "Inter-observer Agreement (IOA)",
      definition: "The degree to which two or more independent observers report the same observed values.",
      category: "Assessment",
    },
  ],
  "Procedures": [
    {
      id: 11,
      term: "Extinction",
      definition: "The discontinuation of reinforcement of a previously reinforced behavior.",
      category: "Procedures",
    },
    {
      id: 12,
      term: "Differential Reinforcement",
      definition: "Reinforcing one response class and withholding reinforcement for another response class.",
      category: "Procedures",
    },
    {
      id: 13,
      term: "Prompting",
      definition: "Supplementary stimulus that increases the likelihood of a correct response.",
      category: "Procedures",
    },
    {
      id: 14,
      term: "Chaining",
      definition: "A procedure for establishing complex behaviors by reinforcing individual components in sequence.",
      category: "Procedures",
    },
    {
      id: 15,
      term: "Shaping",
      definition: "Reinforcing successive approximations toward a terminal behavior.",
      category: "Procedures",
    },
  ],
  "Ethics": [
    {
      id: 16,
      term: "Multiple Relationships",
      definition: "When a professional engages in dual or multiple relationships with a client that could impair professional judgment.",
      category: "Ethics",
    },
    {
      id: 17,
      term: "Confidentiality",
      definition: "The ethical principle that information shared with a professional remains private.",
      category: "Ethics",
    },
    {
      id: 18,
      term: "Scope of Competence",
      definition: "The range of professional activities an individual is qualified to perform based on education, training, and experience.",
      category: "Ethics",
    },
    {
      id: 19,
      term: "Informed Consent",
      definition: "The process by which a client voluntarily confirms willingness to participate in a particular service after being informed of all aspects relevant to their decision.",
      category: "Ethics",
    },
    {
      id: 20,
      term: "Professional Boundaries",
      definition: "Limits that protect the space between the professional's power and the client's vulnerability.",
      category: "Ethics",
    },
  ],
};

const categories = ["All", "Terminology", "Assessment", "Procedures", "Ethics"];

const Flashcards = () => {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [currentCategory, setCurrentCategory] = useState("All");
  const [knownCards, setKnownCards] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    setFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const markAsKnown = (id: number) => {
    if (!knownCards.includes(id)) {
      setKnownCards(prev => [...prev, id]);
    }
  };

  const markAsUnknown = (id: number) => {
    setKnownCards(prev => prev.filter(cardId => cardId !== id));
  };

  const resetCards = () => {
    setFlipped({});
    setKnownCards([]);
  };

  const getFilteredCards = () => {
    let cards: Flashcard[] = [];
    
    if (currentCategory === "All") {
      Object.values(flashcards).forEach(categoryCards => {
        cards = [...cards, ...categoryCards];
      });
    } else {
      cards = flashcards[currentCategory] || [];
    }
    
    return cards;
  };

  const filteredCards = getFilteredCards();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Layers className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6 text-slate-900">RBT Flashcards</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Test your knowledge with our interactive flashcards covering key RBT concepts, 
              procedures, and ethical guidelines.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                variant="outline" 
                onClick={resetCards}
                className="flex items-center gap-2"
              >
                <ArrowLeftRight size={16} />
                Reset All Cards
              </Button>
              
              <div className="flex items-center gap-2 text-sm bg-gray-100 px-4 py-2 rounded-md">
                <span className="font-medium text-slate-700">Known:</span>
                <span className="text-green-600 font-bold">{knownCards.length}</span>
                <span className="mx-1">/</span>
                <span className="text-slate-700 font-bold">{filteredCards.length}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="All" onValueChange={setCurrentCategory} className="mb-12">
            <TabsList className="mb-8 grid grid-cols-5 max-w-md mx-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={currentCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCards.map((card) => (
                  <div key={card.id} className="relative">
                    <motion.div
                      className={`h-64 perspective-1000 cursor-pointer ${knownCards.includes(card.id) ? 'opacity-60' : ''}`}
                      onClick={() => toggleFlip(card.id)}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card 
                        className={`h-full flex items-center justify-center p-6 backface-hidden ${
                          flipped[card.id] ? 'hidden' : 'block'
                        }`}
                      >
                        <div className="text-center">
                          <Bookmark size={24} className="text-primary mx-auto mb-4" />
                          <h3 className="text-xl font-semibold mb-2">{card.term}</h3>
                          <div className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 inline-block mt-2">
                            {card.category}
                          </div>
                          <p className="text-sm text-slate-500 mt-4">Click to flip</p>
                        </div>
                      </Card>
                      
                      <Card 
                        className={`h-full flex items-center justify-center p-6 backface-hidden ${
                          flipped[card.id] ? 'block' : 'hidden'
                        }`}
                      >
                        <div className="text-center">
                          <p className="text-lg">{card.definition}</p>
                          <p className="text-sm text-slate-500 mt-4">Click to flip back</p>
                        </div>
                      </Card>
                    </motion.div>
                    
                    <div className="absolute top-2 right-2 flex gap-2">
                      {!knownCards.includes(card.id) ? (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 rounded-full bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsKnown(card.id);
                          }}
                        >
                          <Check size={16} />
                        </Button>
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 rounded-full bg-red-100 text-red-700 hover:bg-red-200 hover:text-red-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsUnknown(card.id);
                          }}
                        >
                          <X size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Flashcards;
