import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Opening({ handleOnOpen, transition }) {
  const router = useRouter()
  const { query } = router
  const tm = query?.tm

  return (
    <motion.div
      className="absolute bg-background z-50 h-screen px-8 grid place-items-center text-xl max-w-[640px]"
      variants={transition}
    >
      <div className="p-8 relative bg-primary text-background text-center font-alice">
        <div className="text-xl font-bold">Selamat Datang</div>
        <div className="text-sm italic">Bapak/Ibu/Saudara/i</div>
        <div className="text-xl my-2 font-alice font-bold">{tm ? tm : 'Tamu Undangan'}</div>
        <div className="flex justify-center items-center">
          <img
            src="./love-latter.svg"
            className="h-20 w-20 mb-4 animate-bounce-slow"
          />
        </div>

        <div className="text-sm">
          Tanpa mengurangi rasa hormat, kami memberikan kabar bahagia ini dan
          memohon restu dari rekan sekalian untuk senantiasa mendoakan
          kelancaran acara pernikahan kami.
        </div>
        <button
          className="text-lg border mt-6 px-4 py-1 border-primary text-primary bg-background rounded-md hover:text-background hover:bg-primary hover:border-background"
          onClick={() => handleOnOpen()}
        >
          Buka Undangan
        </button>
      </div>
    </motion.div>
  );
}
