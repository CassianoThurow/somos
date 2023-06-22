import heroImg from '../assets/teste.png'

const Hero = () => {
  return (
    <section className="mt-16 bg-primary-yellow ">
      <div className="px-5 py-8 w-64">
      <h1 className="font-montserrat text-4xl text-primary-black font-bold leading-48 ">Soluções 99 feitas pra você!</h1>
      <p>Na 99 você conta com as melhores parcerias dentro e fora do carro.</p>
      </div>
      <img className="w-full" src={heroImg} alt="" />
    </section>
  )

}

export default Hero;