import React from "react";
import LazyLoad from "react-lazyload";

import IHero from "../../commons/interface/IHero";

import { HeroName, HeroCard as HeroCardComponent } from '../../styles/components/Hero';

import { handleHeroImage } from '../../providers/heroes.provider';

interface IHeroCardProps {
  hero: IHero
}

const HeroCard: React.FC<IHeroCardProps> = ({ hero }) => {
  return (
    <HeroCardComponent>
      <LazyLoad height={250} once>
        <img
          src={handleHeroImage(hero.name, 'large')}
          alt={hero.localized_name}
        />
      </LazyLoad>
      <HeroName align="center">{hero.localized_name}</HeroName>
    </HeroCardComponent>
  )
};

export default HeroCard;