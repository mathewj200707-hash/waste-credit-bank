import React, { useState } from 'react';
import { 
  Leaf, 
  User, 
  HardHat, 
  ArrowLeft, 
  LogOut, 
  AlertTriangle, 
  Camera, 
  CheckCircle, 
  Image as ImageIcon,
  History,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function WasteCreditBank() {
  const [currentView, setCurrentView] = useState('welcome');
  const [userId, setUserId] = useState('');

  // Added 'any' types to pass Vercel strict mode
  const handleStrictNumberInput = (e: any, setter: any) => {
    let val = e.target.value.replace(/[^0-9]/g, '');
    if (val === '') {
      setter('');
      return;
    }
    const num = parseInt(val, 10);
    if (num > 160) {
      setter('160');
    } else {
      setter(num.toString());
    }
  };

  const WelcomeView = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
      <div className="relative flex items-center justify-center w-24 h-24 mb-8">
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
        <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-3xl shadow-2xl transform rotate-3">
          <Leaf className="w-12 h-12 text-slate-900" />
        </div>
      </div>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-100 mb-3 text-center tracking-tight">
        Waste Credit Bank
      </h1>
      <p className="text-center text-emerald-200/70 mb-12 text-lg">Turning responsible habits into <br/>community rewards.</p>
      
      <div className="w-full space-y-4">
        <button 
          onClick={() => setCurrentView('login')}
          className="group flex items-center justify-between w-full p-5 transition-all duration-300 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(52,211,118,0.2)] hover:-translate-y-1 active:scale-95"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl shadow-inner text-white">
              <User className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold text-white tracking-wide">I am a Resident</span>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-400/50 group-hover:text-emerald-400 transition-colors" />
        </button>

        <button 
          onClick={() => setCurrentView('staff')}
          className="group flex items-center justify-between w-full p-5 transition-all duration-300 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(251,146,60,0.2)] hover:-translate-y-1 active:scale-95"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-orange-400 to-rose-500 rounded-xl shadow-inner text-white">
              <HardHat className="w-6 h-6" />
            </div>
            <span className="text-lg font-semibold text-white tracking-wide">I am Housekeeping</span>
          </div>
          <ChevronRight className="w-5 h-5 text-orange-400/50 group-hover:text-orange-400 transition-colors" />
        </button>
      </div>
    </div>
  );

  const LoginView = () => {
    const [idInput, setIdInput] = useState('');
    const [passInput, setPassInput] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: any) => {
      e.preventDefault();
      const numId = parseInt(idInput, 10);
      
      if (!idInput || numId < 1 || numId > 160) {
        setError('Please enter a valid Flat (1 - 160).');
        return;
      }
      if (idInput !== passInput) {
        setError('Password does not match Flat Number.');
        return;
      }
      
      setUserId(idInput);
      setCurrentView('resident');
    };

    return (
      <div className="flex flex-col min-h-screen p-6 bg-slate-50">
        <button onClick={() => setCurrentView('welcome')} className="flex items-center text-slate-500 mb-6 self-start p-2 -ml-2 rounded-lg hover:bg-slate-200 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </button>
        
        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
            <User className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Resident Login</h2>
          <p className="text-sm text-slate-500 mb-8 font-medium">Enter Flat No. 1-160. Password matches ID.</p>
          
          {error && <div className="p-4 mb-6 text-sm font-semibold text-red-600 bg-red-50 border border-red-100 rounded-xl flex items-center"><AlertTriangle className="w-4 h-4 mr-2" />{error}</div>}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Flat Number (1-160)</label>
              <input 
                type="number" 
                value={idInput}
                onChange={(e) => handleStrictNumberInput(e, setIdInput)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none transition-all text-lg font-bold text-slate-700"
                placeholder="e.g., 42"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Password</label>
              <input 
                type="password" 
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 focus:outline-none transition-all text-lg font-bold text-slate-700"
                placeholder="Matches Flat Number"
              />
            </div>
            <button type="submit" className="w-full p-4 mt-4 font-bold text-white transition-all bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 hover:shadow-emerald-500/40 active:scale-95 text-lg">
              Access Wallet
            </button>
          </form>
        </div>
      </div>
    );
  };

  const ResidentView = () => {
    const [showPhoto, setShowPhoto] = useState(false);

    return (
      <div className="flex flex-col min-h-screen bg-slate-100 pb-8">
        <div className="bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-800 rounded-b-[2.5rem] px-6 pt-12 pb-10 shadow-lg shadow-emerald-500/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-center mb-8 relative z-10">
            <h2 className="text-xl font-medium tracking-wide">Welcome, Flat <span className="font-bold text-2xl">{userId}</span></h2>
            <button onClick={() => setCurrentView('welcome')} className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
          <div className="relative z-10">
            <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wider">Current Balance</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-6xl font-black tracking-tight drop-shadow-md">240</span>
              <span className="text-xl font-semibold opacity-90">Credits</span>
            </div>
          </div>
        </div>

        <div className="px-5 -mt-6 space-y-5 relative z-20">
          <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-lg text-sm">
                <Sparkles className="w-4 h-4 mr-2" /> Next Perk
              </div>
              <span className="text-sm font-black text-slate-800">300 pts</span>
            </div>
            <p className="text-lg text-slate-700 mb-4 font-bold">Free Weekend Guest Parking</p>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-sm text-slate-500 text-right mt-3 font-semibold">60 points away!</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-start">
              <div className="bg-amber-100 p-2 rounded-xl mr-4 flex-shrink-0 shadow-sm">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div className="w-full">
                <h4 className="font-bold text-amber-900 text-lg">Recent Issue</h4>
                <p className="text-sm text-amber-700 mt-1 mb-4 font-medium leading-relaxed">Plastic waste was mixed into the Dry bin yesterday.</p>
                <button 
                  onClick={() => setShowPhoto(!showPhoto)}
                  className="w-full flex justify-center items-center text-sm font-bold text-amber-700 bg-amber-200/50 hover:bg-amber-200 px-4 py-3 rounded-xl transition-colors active:scale-95"
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  {showPhoto ? 'Hide Photo Proof' : 'View Photo Proof'}
                </button>
                {showPhoto && (
                  <div className="mt-4 h-40 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 text-sm font-medium shadow-inner overflow-hidden relative">
                    <Camera className="w-8 h-8 opacity-20 absolute" />
                    <span className="relative z-10">[Photo of Mixed Waste]</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-50">
            <div className="flex items-center text-slate-800 font-extrabold text-lg mb-5">
              <History className="w-5 h-5 mr-3 text-emerald-500" /> Transaction History
            </div>
            <div className="space-y-4">
              {[
                { bin: 'Wet', status: 'Perfectly Sorted', pts: '+10', date: 'Today, 8:00 AM' },
                { bin: 'Plastic', status: 'Perfectly Sorted', pts: '+10', date: 'Today, 8:00 AM' },
                { bin: 'Dry', status: 'Mixed Issue Logged', pts: '-15', date: 'Yesterday, 8:15 AM' },
              ].map((tx: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <p className="font-bold text-slate-800">{tx.bin} Bin</p>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{tx.date} • {tx.status}</p>
                  </div>
                  <div className={`font-black text-lg ${tx.pts.includes('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {tx.pts}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const StaffView = () => {
    const [selectedFlat, setSelectedFlat] = useState('');
    // Added 'any' typing here to pass strict indexing rules
    const [status, setStatus] = useState<any>({ Wet: null, Dry: null, Plastic: null });

    return (
      <div className="flex flex-col min-h-screen bg-slate-100 pb-24">
        <div className="bg-slate-900 text-white px-6 pt-12 pb-6 shadow-xl flex justify-between items-center sticky top-0 z-30">
          <div className="flex items-center">
            <div className="bg-orange-500/20 p-2 rounded-lg mr-3">
              <HardHat className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-xl font-bold tracking-wide">Logger Mode</h2>
          </div>
          <button onClick={() => setCurrentView('welcome')} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-bold transition-colors">
            Exit
          </button>
        </div>

        <div className="p-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
            <label className="block text-sm font-black text-slate-400 mb-3 uppercase tracking-widest text-center">Select Flat (1-160)</label>
            <input 
              type="number" 
              value={selectedFlat}
              onChange={(e) => handleStrictNumberInput(e, setSelectedFlat)}
              className="w-full text-5xl font-black text-center p-6 border-4 border-slate-100 rounded-2xl focus:border-orange-500 focus:outline-none bg-slate-50 text-slate-800 transition-colors shadow-inner"
              placeholder="#"
            />
          </div>

          <div className="space-y-5">
            {['Wet', 'Dry', 'Plastic'].map((bin) => (
              <div key={bin} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-black text-slate-800 mb-4 ml-1">{bin} Bin</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setStatus({...status, [bin]: 'good'})}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border-4 transition-all duration-200 active:scale-95 ${
                      status[bin] === 'good' ? 'border-emerald-500 bg-emerald-50 text-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    <CheckCircle className={`w-8 h-8 mb-2 ${status[bin] === 'good' ? 'text-emerald-500' : 'text-slate-300'}`} /> 
                    <span className="font-bold text-lg">Good</span>
                  </button>
                  <button 
                    onClick={() => setStatus({...status, [bin]: 'issue'})}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border-4 transition-all duration-200 active:scale-95 ${
                      status[bin] === 'issue' ? 'border-rose-500 bg-rose-50 text-rose-600 shadow-[0_0_15px_rgba(244,63,94,0.2)]' : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    <AlertTriangle className={`w-8 h-8 mb-2 ${status[bin] === 'issue' ? 'text-rose-500' : 'text-slate-300'}`} /> 
                    <span className="font-bold text-lg">Issue</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-5 bg-white border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-40 space-y-3 max-w-md mx-auto">
            <button className="w-full flex items-center justify-center p-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-2xl font-black text-lg active:scale-95 transition-all border border-indigo-100">
              <Camera className="w-6 h-6 mr-3" /> Attach Photo Proof
            </button>
            <button 
              disabled={!selectedFlat || parseInt(selectedFlat) < 1}
              className="w-full p-5 bg-slate-900 disabled:bg-slate-300 text-white disabled:text-slate-500 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all"
            >
              Submit Flat {selectedFlat || '?'}
            </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-900 shadow-2xl relative overflow-x-hidden font-sans">
      {currentView === 'welcome' && <WelcomeView />}
      {currentView === 'login' && <LoginView />}
      {currentView === 'resident' && <ResidentView />}
      {currentView === 'staff' && <StaffView />}
    </div>
  );
}
