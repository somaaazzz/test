
// app/candidates/page.tsx
import Link from 'next/link';
import { candidates } from '@/data';

const CandidatesList = () => {

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm border">
          {/* Header */}
          <div className="border-b p-6">
            <h1 className="text-2xl font-bold text-center">候補者一覧</h1>
          </div>

          {/* Candidates List */}
          <div className="divide-y">
            {candidates.map((candidate) => (
              <div 
                className="block p-6 hover:bg-gray-50 transition-colors" key={candidate.id}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    
                    {/* Candidate Info */}
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        {candidate.name}
                      </h2>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                        <span>{candidate.role}</span>
                        <span>•</span>
                        <span>{candidate.age}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <Link href="/message" className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                      メッセージ
                    </Link>
                    <Link href={"/profile/" + candidate.id} className="px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                      詳細
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesList;
