import Image from 'next/image'

export default function baner () {
  return (
        <>
            <div className="w-full flex justify-center ">
                <Image
                    src='/images/Inicio/STORE.png'
                    width={900}
                    height={34}
                    className="w-4/5 Baner"
                    alt="Anvic"
                />
            </div>

        </>

  )
}
