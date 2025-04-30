import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import SectionBanner from '../CommonComponents/SectionBanner';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { AuthContext } from '../../Provider/AuthProvider';

const CreateQuizPage = () => {
  const [language, setLanguage] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [loading, setLoading] = useState(false);
  const secureAxios = useSecureAxios();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!language || !difficulty) {
      toast.error('Please fill in both language and difficulty.');
      return;
    }

    if (!user || !user.email) {
      toast.error('User not authenticated. Please log in.');
      return;
    }

    const payload = {
      topic: language,
      difficulty: difficulty,
      email: user.email,
    };

    setLoading(true);

    try {
      const response = await secureAxios.post('/quizzes/create-quiz', payload);
      toast.success('Quiz created successfully! Starting your quiz...');
      navigate('/quiz/questions', { state: { quizData: response.data } });
    } catch (error) {
      console.error('Error creating quiz:', error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
      toast.error('Failed to create quiz. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Section Banner */}
      <SectionBanner title="Quiz Page" />

      {/* Message Section
      <div className="text-center max-w-3xl mx-auto px-4 py-8 bg-opacity-50 rounded-lg shadow-lg">
        <p className="text-lg text-white leading-relaxed">
          Create your own quiz questions to challenge yourself or others! Select a programming language and difficulty level, and we’ll generate a quiz tailored to your preferences.
        </p>
      </div> */}

      {/* Form Section */}
      <div className="max-w-md mx-auto mt-10 p-8 rounded-xl shadow-2xl border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create a New Quiz</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="language" className="block text-white text-sm font-medium mb-2">
              Language
            </label>
            <input
              type="text"
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="e.g., Java, Python"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="difficulty" className="block text-white text-sm font-medium mb-2">
              Difficulty
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              disabled={loading}
            >
              <option value="">Select difficulty</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <button
            type="submit"
            className={`w-full h-12 text-lg bg-custom-primary text-white rounded-lg hover:bg-opacity-90 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Question'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateQuizPage;