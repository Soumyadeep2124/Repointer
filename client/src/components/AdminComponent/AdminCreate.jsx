// Modern, visually attractive AdminCreate UI with orange-500 theme
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axiosClient from '../../utils/axiosClient';
import { useNavigate } from 'react-router';

const problemSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  tags: z.enum(['array', 'linkedList', 'graph', 'dp']),
  visibleTestCases: z.array(
    z.object({
      input: z.string().min(1, 'Input is required'),
      output: z.string().min(1, 'Output is required'),
      explanation: z.string().min(1, 'Explanation is required')
    })
  ).min(1, 'At least one visible test case required'),
  hiddenTestCases: z.array(
    z.object({
      input: z.string().min(1, 'Input is required'),
      output: z.string().min(1, 'Output is required')
    })
  ).min(1, 'At least one hidden test case required'),
  startCode: z.array(
    z.object({
      language: z.enum(['C++', 'Java', 'JavaScript']),
      initialCode: z.string().min(1, 'Initial code is required')
    })
  ).length(3, 'All three languages required'),
  referenceSolution: z.array(
    z.object({
      language: z.enum(['C++', 'Java', 'JavaScript']),
      completeCode: z.string().min(1, 'Complete code is required')
    })
  ).length(3, 'All three languages required')
});

function AdminCreate() {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(problemSchema),
    defaultValues: {
      startCode: [
        { language: 'C++', initialCode: '' },
        { language: 'Java', initialCode: '' },
        { language: 'JavaScript', initialCode: '' }
      ],
      referenceSolution: [
        { language: 'C++', completeCode: '' },
        { language: 'Java', completeCode: '' },
        { language: 'JavaScript', completeCode: '' }
      ]
    }
  });

  const { fields: visibleFields, append: appendVisible, remove: removeVisible } = useFieldArray({ control, name: 'visibleTestCases' });
  const { fields: hiddenFields, append: appendHidden, remove: removeHidden } = useFieldArray({ control, name: 'hiddenTestCases' });

  const onSubmit = async (data) => {
    try {
      await axiosClient.post('/problem/create', data);
      alert('Problem created successfully!');
      navigate('/');
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f111c] px-6 py-10 text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-orange-500">Create New Problem</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Section Card */}
          <div className="glass-card">
            <h2 className="section-title">Basic Information</h2>
            <div className="space-y-4">
              <input {...register('title')} placeholder="Problem Title" className="input-field" />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

              <textarea {...register('description')} placeholder="Problem Description" className="textarea-field h-32" />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

              <div className="flex gap-4">
                <select {...register('difficulty')} className="select-field">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <select {...register('tags')} className="select-field">
                  <option value="array">Array</option>
                  <option value="linkedList">Linked List</option>
                  <option value="graph">Graph</option>
                  <option value="dp">DP</option>
                </select>
              </div>
            </div>
          </div>

          {/* Visible & Hidden Test Cases */}
          <div className="glass-card">
            <h2 className="section-title">Test Cases</h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-orange-400">Visible Test Cases</h3>
                  <button type="button" onClick={() => appendVisible({ input: '', output: '', explanation: '' })} className="btn-orange">Add</button>
                </div>

                {visibleFields.map((field, index) => (
                  <div key={field.id} className="case-box">
                    <button type="button" onClick={() => removeVisible(index)} className="btn-red float-right">Remove</button>
                    <input {...register(`visibleTestCases.${index}.input`)} placeholder="Input" className="input-field" />
                    <input {...register(`visibleTestCases.${index}.output`)} placeholder="Output" className="input-field" />
                    <textarea {...register(`visibleTestCases.${index}.explanation`)} placeholder="Explanation" className="textarea-field" />
                  </div>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-orange-400">Hidden Test Cases</h3>
                  <button type="button" onClick={() => appendHidden({ input: '', output: '' })} className="btn-orange">Add</button>
                </div>

                {hiddenFields.map((field, index) => (
                  <div key={field.id} className="case-box">
                    <button type="button" onClick={() => removeHidden(index)} className="btn-red float-right">Remove</button>
                    <input {...register(`hiddenTestCases.${index}.input`)} placeholder="Input" className="input-field" />
                    <input {...register(`hiddenTestCases.${index}.output`)} placeholder="Output" className="input-field" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Templates */}
          <div className="glass-card">
            <h2 className="section-title">Code Templates</h2>
            {[0, 1, 2].map((index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-orange-400 font-semibold">
                  {index === 0 ? 'C++' : index === 1 ? 'Java' : 'JavaScript'}
                </h3>
                <textarea {...register(`startCode.${index}.initialCode`)} placeholder="Initial Code" rows={5} className="textarea-field font-mono" />
                <textarea {...register(`referenceSolution.${index}.completeCode`)} placeholder="Reference Solution" rows={5} className="textarea-field font-mono" />
              </div>
            ))}
          </div>

          <button type="submit" className="btn-orange w-full py-3 rounded-md text-lg font-semibold">Create Problem</button>
        </form>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 0 20px rgba(255, 100, 0, 0.15);
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #fff;
        }
        .input-field, .select-field, .textarea-field {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: #fff;
        }
        .case-box {
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          background-color: rgba(255, 255, 255, 0.03);
          margin-bottom: 1rem;
        }
        .btn-orange {
          background-color: #f97316;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
        .btn-red {
          background-color: #ef4444;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
        }
      `}</style>
    </div>
  );
}

export default AdminCreate;
