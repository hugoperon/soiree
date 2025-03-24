'use client'

import { motion } from 'framer-motion'
import { FaWineGlass, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  const basePath = process.env.NODE_ENV === 'production' ? '/soiree' : ''
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Soirée Festive</h1>
          <p className="text-xl text-purple-200">Chez la grand-mère de Léane</p>
        </motion.div>

        {/* Informations principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl text-purple-300" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p>7 chemin des près</p>
                  <p>91320 Wissous</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FaClock className="text-2xl text-purple-300" />
                <div>
                  <h3 className="font-semibold">Date &amp; Heure</h3>
                  <p>Vendredi 28 mars 2025</p>
                  <p>À partir de 19h</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaWineGlass className="text-2xl text-purple-300" />
              <h3 className="font-semibold text-xl">Thème : Jeux d&apos;alcool</h3>
            </div>
            <p className="text-purple-200 italic mb-4">
              &quot;L&apos;abus de santé est dangereux pour l&apos;alcool&quot; 🍷
            </p>
            <div className="bg-red-500/20 p-4 rounded-lg">
              <p className="text-sm">
                La consommation d&apos;alcool est réservée aux personnes majeures.
                À consommer avec modération.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Photo de la maison */}
        <div className="w-full h-[400px] relative bg-white/10 rounded-lg mb-8 overflow-hidden">
          <Image
            src={`${basePath}/mamieleane.jpg`}
            alt="Maison de la grand-mère de Léane"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="rounded-lg"
          />
        </div>
      </div>
    </main>
  )
}
