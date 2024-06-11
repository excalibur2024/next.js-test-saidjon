import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/components/fonts';
import Image from 'next/image';
import SideNav from "@/app/components/sidenav";

export default function Page() {
  return (
    <main className='bg-[#F0F9FE]'>
      <div>
          <SideNav />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className='flex-[60%] py-20 px-14 md:text-start text-center order-2 md:order-1'>
            <div className='text-3xl font-semibold text-[#447EF7]'>Value is the True Path to Admissions!</div>
            <h1 className='mt-6'>You should know 4-5 valuable reasons why a university would want you.</h1>
            <button className='bg-gradient-to-r from-[#447EF7] via-[#4B66EA] to-[#4B66EA] items-center mt-4 gap-3 self-start rounded-lg px-4 py-2 text-sm font-light text-white'>
              BOOK YOUR STRATEGY SESSION!
            </button>
        </div>
        <div className='flex flex-[40%] items-center justify-center order-1 md:order-2'>
          <Image src="/video.png" width={300} height={200} alt="video" />
        </div>
      </div>

      <div className='flex my-14 text-2xl font-medium'>
        <div className='flex-[39%]'></div>
        <div className='flex-[61%]'>Know Your Value</div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className='flex items-center justify-center flex-[40%]'>
          <Image src="/book.png" width={456} height={492} alt="video" />
        </div>
        <div className='flex-[60%] py-2 px-6'>
            <div className='text-2xl font-medium text-[#447EF7]'>Knowing and articulating the value you offer a university is essential
            for gaining admission into your top choices.</div>
            <h2 className='mt-6'>In order to Know Your Value, you should be able to say yes to ALL of these</h2>
            <div className='mt-5 flex flex-row'>
              <div className='width-[40px]'><Image src="/tick.png" width={36} height={36} alt="video" /></div>
              <h2 className='text-[#758EB3]'>
                Can you confidently list 4-5 reasons why a universtiy would consider you exceptionaliy valuable, excluding academic achievements?</h2>
            </div>
            <div className='mt-5 flex flex-row'>
            <div className='width-[40px]'><Image src="/tick.png" width={36} height={36} alt="video" /></div>
              <h2 className='text-[#758EB3]'>
                Do you have a clear strategy of how to highlight htis value throughour the various parts of your application</h2>
            </div>
            <div className='mt-5 flex flex-row'>
            <div className='width-[40px]'><Image src="/tick.png" width={36} height={36} alt="video" /></div>
              <h2 className='text-[#758EB3]'>
                Are you confident that, in the final stage of the admission process, an admissions officer would strongly advocate for your
                acceptance over other applicants?</h2>
            </div>
        </div>
      </div>

      <div className='my-14 text-2xl font-medium text-center mx-2 md:mx-40'>
        A diamond that is buried deep underneath the soil is only valuable once it is mined, cut, and published.
      </div>


      <div className="flex flex-col md:flex-row">
        <div className='bg-[#FFFFFF] shadow-lg rounded-md text-center m-5 md:ml-16 p-5'>
          <div  className='text-xl font-medium text-[#222161] py-5'>
              Be Valuable
          </div>
          <h2 className='text-[#758EB3]'>
            Don`t be like a rough diamond waiting to be discovered. Present yourself to universities as a polished gem
            showcasing your full potential an most brilliant qualities!</h2>
        </div>

        <div className="bg-[#FFFFFF] shadow-lg rounded-md text-center  mx-5 md:mx-8 p-5">
          <div  className="text-xl font-medium text-[#222161] py-5">
              It`s Not about Grades or Activities
          </div>
          <h2 className='text-[#758EB3]'>
            Academic exelience and extracurricular activities are expected. Those parts of your application are only the first 
            hurdle towareds gaining acceptance into a university.</h2>
        </div>

        <div className='bg-[#FFFFFF] shadow-lg rounded-md text-center m-5 md:mr-16 p-5'>
          <div  className='text-xl font-medium text-[#222161] py-5'>
              Why Value is Important
          </div>
          <h2 className='text-[#758EB3]'>
            Universities are not willing to take risks. They want strong students who will add to the campus and who are likely to become very 
            successful adults.</h2>
        </div>  
      </div>

      <div className='my-14 text-2xl font-medium text-center'>
        The Value Gap
      </div>
      
      <div className='bg-[#FFFFFF] shadow-lg rounded-lg mx-5 md:mx-16 p-5 flex flex-col md:flex-row'>
        <div className='m-5 flex items-center justify-center flex-[50%]'>
          <Image src="/accepted.png" width={575} height={276} alt="video" />
        </div>
        <div className='ml-5 flex flex-[50%] my-auto'>
          <h2 className='text-[#758EB3]'>
            The value gap is how much value, beyond academics, you need to bring to a university in order to be accepted.
            <br />
            Lower scores and GPA mean you must show extra value to universities fpr acceptance compared to high-scoring applicants.
            <br />
            You can fill in the Value GAp by demonstrating ways tha you will add positively to campus life or by showing that you are likely to becom a 
            successful aduit and give back later.
          </h2>
        </div>
      </div> 

      <div className="flex flex-col md:flex-row m-5 md:m-20">
        <div className='flex-[60%] my-auto px-6 order-2 md:order-1'>
            <div className='text-2xl font-medium text-[#447EF7] py-6'>Exploring Your Value with College Mastermind</div>
            <h2 className='text-[#758EB3]'>
                At College Mastermind, we have a Know Your Value process where we will work with you to find, develop, and
                present yourself in a way tha tensures that colleges see the incredible value you wil bring to their campuses now 
                and in the future.</h2>
        </div>

        <div className='flex items-center justify-center flex-[40%] order-1 md:order-2'>
          <Image src="/speech.png" width={485} height={485} alt="video" />
        </div>
      </div>

      
      <div className='my-5'>
          footer
        </div>
           
    </main>
  );
}
