import { Globe, Server, Wrench } from 'lucide-react';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 mt-20'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          {/* Frontend Skills Card */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <Globe className='w-20 h-20 mx-auto mt-[-3rem]' />
              <h2 className='text-2xl font-bold text-center py-8'>Frontend</h2>
              <div className='text-center font-medium flex-1'>
                  <p className='py-2 border-b mx-8 mt-8'>React.js</p>
                  <p className='py-2 border-b mx-8'>JavaScript</p>
                  <p className='py-2 border-b mx-8'>HTML</p>
                  <p className='py-2 border-b mx-8'>CSS</p>
                  <p className='py-2 border-b mx-8'>Flutter</p>
                  <p className='py-2 border-b mx-8'>Tailwind</p>
              </div>
          </div>

          {/* Backend Skills Card */}
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <Server className='w-20 h-20 mx-auto mt-[-3rem] bg-gray-100 p-4' />
              <h2 className='text-2xl font-bold text-center py-8'>Backend</h2>
              <div className='text-center font-medium flex-1'>
                  <p className='py-2 border-b mx-8 mt-8'>Python</p>
                  <p className='py-2 border-b mx-8'>Java</p>
                  <p className='py-2 border-b mx-8'>C#</p>
                  <p className='py-2 border-b mx-8'>PHP</p>
                  <p className='py-2 border-b mx-8'>C</p>
                  <p className='py-2 border-b mx-8'>SQL</p>
                  <p className='py-2 border-b mx-8'>Node.js</p>
              </div>
          </div>

          {/* Frameworks & Tools Card */}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <Wrench className='w-20 h-20 mx-auto mt-[-3rem] ' />
              <h2 className='text-2xl font-bold text-center py-8'>Frameworks & Tools</h2>
              <div className='text-center font-medium flex-1'>
                  <p className='py-2 border-b mx-8 mt-8'>.NET Framework</p>
                  <p className='py-2 border-b mx-8'>Firebase</p>
                  <p className='py-2 border-b mx-8'>AWS</p>
                  <p className='py-2 border-b mx-8'>Google Cloud Platform</p>
                  <p className='py-2 border-b mx-8'>GitLab</p>
                  <p className='py-2 border-b mx-8'>FlutterFlow</p>
                  <p className='py-2 border-b mx-8'>MongoDB</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cards;