"use client"
import CustomButton from "./CustomButton"
import { SetStateAction, useState } from 'react';

const SearchBar = () => {
  const handleScroll = () => {}
  const mockData = ['Tizi Ouzou', 'Alger', 'Bejaia', 'Adrar', 'Boumerdes'];// mock data pour les suggestions

  const [searchTerm, setSearchTerm] = useState('');// état local pour stocker le terme de recherche

  const handleSearch = (event: { preventDefault: () => void; }) => { //c'est lors de la soumission du formulaire qu'on l'appel
    //pour empecher la recharge de la page quand l formulaire est soumis
    console.log('Terme de recherche:', searchTerm);
  };

  // fonction appelée lors du changement de la valeur de la barre de recherche
  const handleInputChange = (event: { target: { value: any; }; }) => {
    const term = event.target.value;//renvoyer la nouvelle valeur de la recherche
    setSearchTerm(term);
  };

  //fonction appelée lors de la sélection d'une suggestion
  const handleOptionClick = (selectedOption: SetStateAction<string>) => {
    setSearchTerm(selectedOption);
  };

  return (
  <form className='searchbar' onSubmit={handleSearch}>
  <div className="searchbar__item flex flex-row justify-center w-full">
    <input
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
      className="bg-transparent focus:outline-none placeholder-black text-black"
      placeholder="Choisissez une localité..."
    />
    {/* Bouton de soumission du formulaire */}
    <CustomButton
      title="Rechercher"
      btnType="submit"
      containerStyles="bg-[#2c5658] text-[#DBCECE] rounded-xl sm:ml-20"
      handleClick={handleScroll}
    /> 
  </div>
  {/* liste déroulante (select) pour les suggestions */}
  {searchTerm && (
    <select className="suggestion-list mt-1 z-20 absolute " size={mockData.length} onChange={(e) => handleOptionClick(e.target.value)}>
      {mockData
        .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((suggestion, index) => (
          // option de suggestion
          <option key={index} value={suggestion}>
            {suggestion}
          </option>
        ))}
    </select>
  )}
</form>
  );
};
export default SearchBar;