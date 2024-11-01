import Link from 'next/link';

import { candidates } from '@/data';

async function ProfilePage({ params }) {
  const id = (await params).id
  const profile = candidates.find(candidate => candidate.id === id);
  console.log(id)
  console.log(profile)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto p-4 space-y-6">
         {/* Back Button */}
         <div className="mb-4">
          <Link href="/" className="text-blue-500 hover:underline">
            ← 戻る
          </Link>
        </div>
        {/* Header Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">
                {profile.name}
                <span className="text-gray-600 text-base font-normal ml-2">({profile.age})</span>
              </h1>
              <p className="text-gray-600">{profile.title}</p>
            </div>
            <p className="text-gray-600">{profile.location}</p>
          </div>
          <p className="mt-2 text-gray-700">{profile.about}</p>

          <div className="mt-4 space-x-2">
            <Link href="/message" className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors">
              オファーメッセージを送信
            </Link>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition-colors">
              お気に入りに登録
            </button>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">職務経験</h2>
          <div className="space-y-4">
            {profile.experience.map((exp, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{exp.title}</h3>
                  </div>
                  <div className="text-sm text-gray-500 text-right">
                    <p>{exp.period}</p>
                    <p>{exp.duration}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">スキル</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Working Conditions */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">勤務条件</h2>
          <ul className="list-disc pl-5 space-y-2">
            {profile.conditions.map((condition, index) => (
              <li key={index} className="text-gray-700">{condition}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
