
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { studyGuides } from "@/data/studyGuides";

const StudyGuideDetail = () => {
  const { guideId } = useParams();
  const guide = studyGuides.find((g) => g.id.toString() === guideId);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Prefetch the PDF
    if (guide) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `/study-guides/${guide.filename}`;
      link.as = 'fetch';
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [guide]);

  const handleDownload = () => {
    if (!guide) return;
    
    try {
      // Create a download link
      const link = document.createElement('a');
      link.href = `/study-guides/${guide.filename}`;
      link.download = guide.filename;
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      // Show success notification
      toast.success(`Downloading: ${guide.title}`, {
        description: `${guide.format} file (${guide.pages} pages)`,
        duration: 3000,
      });
      
    } catch (error) {
      // Show error notification if download fails
      toast.error(`Download failed: ${guide.title}`, {
        description: "The file couldn't be downloaded. Please try again later.",
        duration: 5000,
      });
      console.error("Download error:", error);
    }
  };

  if (!guide) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-24 min-h-screen">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold">Study Guide Not Found</h1>
            <p className="mt-4 mb-8">The study guide you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/guides">Return to Study Guides</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="container mx-auto px-4 py-24 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-6">
              <Link to="/guides">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Study Guides
              </Link>
            </Button>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                {guide.icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{guide.title}</h1>
                <p className="text-lg text-slate-600 mb-4">{guide.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="bg-slate-100 px-3 py-1 rounded-full">
                    <span className="font-medium">Category:</span> {guide.category}
                  </div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full">
                    <span className="font-medium">Format:</span> {guide.format}
                  </div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full">
                    <span className="font-medium">Pages:</span> {guide.pages}
                  </div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full">
                    <span className="font-medium">Updated:</span> {guide.updated}
                  </div>
                </div>
              </div>
            </div>
            
            <Button onClick={handleDownload} size="lg" className="mb-12">
              <Download size={16} className="mr-2" />
              Download Full Guide
            </Button>
          </div>

          <Separator className="my-8" />
          
          <Card className="mb-12">
            <CardContent className="pt-6">
              {guide.id === 1 && (
                <div className="prose max-w-none">
                  <h2>RBT Task List Overview</h2>
                  <p>The RBT Task List is organized into the following major sections:</p>
                  <ul>
                    <li><strong>Measurement:</strong> Recording data accurately and reliably</li>
                    <li><strong>Assessment:</strong> Assisting with functional behavior assessments</li>
                    <li><strong>Skill Acquisition:</strong> Implementing teaching procedures</li>
                    <li><strong>Behavior Reduction:</strong> Implementing behavior reduction plans</li>
                    <li><strong>Documentation and Reporting:</strong> Maintaining accurate records</li>
                    <li><strong>Professional Conduct and Scope of Practice:</strong> Working within ethical guidelines</li>
                  </ul>
                  
                  <h3>Key Measurement Concepts</h3>
                  <p>Measurement is a fundamental skill for RBTs. This includes:</p>
                  <ul>
                    <li>Preparing for data collection</li>
                    <li>Implementing continuous measurement procedures</li>
                    <li>Implementing discontinuous measurement procedures</li>
                    <li>Implementing duration and latency measurement procedures</li>
                    <li>Implementing permanent product recording procedures</li>
                  </ul>
                  
                  <h3>Assessment Procedures</h3>
                  <p>As an RBT, you'll assist BCBAs with conducting assessments by:</p>
                  <ul>
                    <li>Describing the behavior and environment</li>
                    <li>Conducting preference assessments</li>
                    <li>Assisting with individualized assessment procedures</li>
                    <li>Assisting with functional assessment procedures</li>
                  </ul>
                </div>
              )}
              
              {guide.id === 2 && (
                <div className="prose max-w-none">
                  <h2>Essential Behavioral Terminology</h2>
                  <p>Understanding the precise terminology used in applied behavior analysis is crucial for success as an RBT. This glossary covers the most important terms you'll need to know for your exam and practice.</p>
                  
                  <h3>Core Behavioral Principles</h3>
                  <p>These fundamental concepts form the foundation of ABA:</p>
                  
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold">Behavior</dt>
                      <dd>Any observable and measurable action or activity of an organism.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Reinforcement</dt>
                      <dd>A process where a consequence delivered immediately after a behavior increases the future probability of that behavior.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Punishment</dt>
                      <dd>A process where a consequence delivered immediately after a behavior decreases the future probability of that behavior.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Extinction</dt>
                      <dd>The process of withholding reinforcement for a previously reinforced behavior, resulting in a decrease in that behavior.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Antecedent</dt>
                      <dd>An environmental condition or stimulus that occurs before a behavior.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Consequence</dt>
                      <dd>An environmental event that follows a behavior.</dd>
                    </div>
                  </dl>
                  
                  <h3>Types of Reinforcement and Punishment</h3>
                  <p>Understanding the various types of consequences is essential:</p>
                  
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold">Positive Reinforcement</dt>
                      <dd>Adding a stimulus that increases the future probability of behavior.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Negative Reinforcement</dt>
                      <dd>Removing a stimulus that increases the future probability of behavior.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Positive Punishment</dt>
                      <dd>Adding a stimulus that decreases the future probability of behavior.</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Negative Punishment</dt>
                      <dd>Removing a stimulus that decreases the future probability of behavior.</dd>
                    </div>
                  </dl>
                </div>
              )}
              
              {guide.id === 3 && (
                <div className="prose max-w-none">
                  <h2>Measurement and Assessment Techniques</h2>
                  <p>Accurate measurement and assessment are the backbone of effective ABA intervention. This guide covers the essential measurement procedures and assessment strategies you'll need to master for the RBT exam.</p>
                  
                  <h3>Measurement Procedures</h3>
                  <p>These are the primary data collection methods used in ABA:</p>
                  
                  <h4>Continuous Measurement</h4>
                  <ul>
                    <li><strong>Frequency/Event Recording:</strong> Counting the number of times a behavior occurs</li>
                    <li><strong>Rate Recording:</strong> Measuring the number of responses per unit of time</li>
                  </ul>
                  
                  <h4>Discontinuous Measurement</h4>
                  <ul>
                    <li><strong>Interval Recording:</strong> Dividing an observation period into equal intervals and recording if behavior occurred</li>
                    <li><strong>Time Sampling:</strong> Recording if behavior is occurring at the end of specified intervals</li>
                    <li><strong>Momentary Time Sampling:</strong> Recording if behavior is occurring at the exact moment when an interval ends</li>
                  </ul>
                  
                  <h4>Temporal Measurements</h4>
                  <ul>
                    <li><strong>Duration Recording:</strong> Measuring how long a behavior lasts</li>
                    <li><strong>Latency Recording:</strong> Measuring the time between a stimulus and a response</li>
                    <li><strong>IRT (Inter-Response Time):</strong> Measuring the time between consecutive responses</li>
                  </ul>
                  
                  <h3>Assessment Strategies</h3>
                  <p>These assessment approaches help identify the function of behavior and develop effective interventions:</p>
                  
                  <ul>
                    <li><strong>Functional Behavior Assessment (FBA):</strong> Process for determining the function or purpose of a behavior</li>
                    <li><strong>ABC Data Collection:</strong> Recording the Antecedent, Behavior, and Consequence</li>
                    <li><strong>Preference Assessments:</strong> Methods to identify potential reinforcers</li>
                    <li><strong>Skill Assessments:</strong> Evaluating a client's current skill levels across domains</li>
                  </ul>
                </div>
              )}
              
              {guide.id === 4 && (
                <div className="prose max-w-none">
                  <h2>Behavior Reduction Strategies</h2>
                  <p>Behavior reduction procedures are essential components of comprehensive behavior intervention plans. This guide explains the most common and effective strategies used to decrease challenging behaviors.</p>
                  
                  <h3>Antecedent-Based Strategies</h3>
                  <p>These interventions focus on modifying environmental factors before behavior occurs:</p>
                  
                  <ul>
                    <li><strong>Noncontingent Reinforcement (NCR):</strong> Providing reinforcement on a time-based schedule independent of behavior</li>
                    <li><strong>Environmental Modifications:</strong> Changing the physical environment to reduce the likelihood of challenging behavior</li>
                    <li><strong>Offering Choices:</strong> Providing options to increase autonomy and reduce escape-maintained behaviors</li>
                    <li><strong>Visual Supports:</strong> Using visual cues to clarify expectations and reduce uncertainty</li>
                  </ul>
                  
                  <h3>Reinforcement-Based Procedures</h3>
                  <p>These strategies use reinforcement to decrease problem behaviors:</p>
                  
                  <ul>
                    <li><strong>Differential Reinforcement of Alternative Behavior (DRA):</strong> Reinforcing a behavior that serves as an alternative to the problem behavior</li>
                    <li><strong>Differential Reinforcement of Incompatible Behavior (DRI):</strong> Reinforcing a behavior physically incompatible with the problem behavior</li>
                    <li><strong>Differential Reinforcement of Other Behavior (DRO):</strong> Reinforcing the absence of problem behavior for a specified time</li>
                    <li><strong>Differential Reinforcement of Low Rates (DRL):</strong> Reinforcing when behavior occurs less frequently than a specified criterion</li>
                  </ul>
                  
                  <h3>Extinction Procedures</h3>
                  <p>Understanding how to implement extinction safely and effectively:</p>
                  
                  <ul>
                    <li><strong>Attention Extinction:</strong> Withholding attention for attention-maintained behaviors</li>
                    <li><strong>Escape Extinction:</strong> Preventing escape from demands for escape-maintained behaviors</li>
                    <li><strong>Extinction Burst:</strong> Temporary increase in behavior when extinction is first implemented</li>
                    <li><strong>Spontaneous Recovery:</strong> Temporary reappearance of extinguished behavior</li>
                  </ul>
                  
                  <h3>Crisis Management</h3>
                  <p>Safety procedures for managing dangerous behaviors:</p>
                  
                  <ul>
                    <li><strong>Crisis Prevention:</strong> Identifying early warning signs</li>
                    <li><strong>De-escalation Techniques:</strong> Strategies to reduce the intensity of behavior</li>
                    <li><strong>Safety Planning:</strong> Developing protocols for dangerous situations</li>
                  </ul>
                </div>
              )}
              
              {guide.id === 5 && (
                <div className="prose max-w-none">
                  <h2>Skill Acquisition Procedures</h2>
                  <p>Teaching new skills is a primary responsibility of RBTs. This guide covers the essential teaching procedures used to develop language, social, academic, and daily living skills.</p>
                  
                  <h3>Discrete Trial Training (DTT)</h3>
                  <p>A structured teaching approach with these components:</p>
                  
                  <ol>
                    <li><strong>Discriminative Stimulus (SD):</strong> Clear instruction or cue</li>
                    <li><strong>Prompt:</strong> Additional help to ensure correct response</li>
                    <li><strong>Response:</strong> Client's behavior</li>
                    <li><strong>Consequence:</strong> Reinforcement for correct responses</li>
                    <li><strong>Inter-trial Interval:</strong> Brief pause between trials</li>
                  </ol>
                  
                  <h3>Prompting Procedures</h3>
                  <p>Methods for providing assistance when teaching new skills:</p>
                  
                  <ul>
                    <li><strong>Most-to-Least (MTL):</strong> Starting with the most intrusive prompt and gradually fading</li>
                    <li><strong>Least-to-Most (LTM):</strong> Starting with the least intrusive prompt and increasing as needed</li>
                    <li><strong>Prompt Types:</strong> Full physical, partial physical, modeling, gestural, verbal</li>
                    <li><strong>Prompt Fading:</strong> Systematically removing prompts to promote independence</li>
                    <li><strong>Prompt Delay:</strong> Introducing a time delay before providing prompts</li>
                  </ul>
                  
                  <h3>Chaining Procedures</h3>
                  <p>Teaching complex sequences of behavior:</p>
                  
                  <ul>
                    <li><strong>Forward Chaining:</strong> Teaching the first step to mastery, then adding subsequent steps</li>
                    <li><strong>Backward Chaining:</strong> Teaching the last step first, then adding preceding steps</li>
                    <li><strong>Total Task Presentation:</strong> Teaching all steps in the sequence during each trial</li>
                    <li><strong>Task Analysis:</strong> Breaking complex skills into smaller teachable steps</li>
                  </ul>
                  
                  <h3>Naturalistic Teaching Strategies</h3>
                  <p>Methods for teaching in everyday environments:</p>
                  
                  <ul>
                    <li><strong>Incidental Teaching:</strong> Using naturally occurring opportunities to teach</li>
                    <li><strong>Natural Environment Training (NET):</strong> Teaching in the context where skills will be used</li>
                    <li><strong>Pivotal Response Training (PRT):</strong> Focusing on pivotal behavioral areas that affect many behaviors</li>
                    <li><strong>Mand Training:</strong> Teaching requests based on motivation</li>
                  </ul>
                </div>
              )}
              
              {guide.id === 6 && (
                <div className="prose max-w-none">
                  <h2>Professional Ethics for RBTs</h2>
                  <p>Ethical practice is the foundation of effective behavior analysis. This guide explains the ethical responsibilities and requirements for Registered Behavior Technicians.</p>
                  
                  <h3>BACB Ethics Code for RBTs</h3>
                  <p>The Behavior Analyst Certification Board (BACB) Ethics Code includes these core areas:</p>
                  
                  <ol>
                    <li><strong>Respecting Client Dignity:</strong> Treating clients with respect and dignity</li>
                    <li><strong>Maintaining Professional Boundaries:</strong> Keeping appropriate relationships with clients</li>
                    <li><strong>Maintaining Confidentiality:</strong> Protecting client privacy and information</li>
                    <li><strong>Acting Within Scope of Practice:</strong> Working within the limits of RBT training</li>
                    <li><strong>Following Supervisor Instructions:</strong> Implementing programs as designed</li>
                  </ol>
                  
                  <h3>Client Confidentiality</h3>
                  <p>Important aspects of maintaining client privacy:</p>
                  
                  <ul>
                    <li><strong>Protected Health Information (PHI):</strong> Understanding what constitutes PHI</li>
                    <li><strong>Secure Communication:</strong> Using appropriate channels for client information</li>
                    <li><strong>Social Media Guidelines:</strong> Avoiding sharing client information on social platforms</li>
                    <li><strong>Documentation Storage:</strong> Properly securing client records</li>
                  </ul>
                  
                  <h3>Mandatory Reporting</h3>
                  <p>RBTs are typically mandated reporters and must report:</p>
                  
                  <ul>
                    <li><strong>Suspected Abuse:</strong> Physical, emotional, or sexual abuse</li>
                    <li><strong>Suspected Neglect:</strong> Failure to provide basic needs</li>
                    <li><strong>Reporting Procedures:</strong> Understanding how and when to report</li>
                    <li><strong>Documentation:</strong> Properly documenting incidents and reports</li>
                  </ul>
                  
                  <h3>Professional Boundaries</h3>
                  <p>Maintaining appropriate boundaries with clients and families:</p>
                  
                  <ul>
                    <li><strong>Dual Relationships:</strong> Avoiding multiple roles with clients</li>
                    <li><strong>Gift Policies:</strong> Understanding appropriate response to gifts</li>
                    <li><strong>Social Media Boundaries:</strong> Not connecting with clients on personal accounts</li>
                    <li><strong>Professional Communication:</strong> Using appropriate language and tone</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default StudyGuideDetail;
