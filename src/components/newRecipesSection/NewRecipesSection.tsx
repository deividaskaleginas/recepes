import { Typography } from "components/typography/Typography";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import DishesContext from "contexts/dishesContext/dishesContext";
import React, { useContext } from "react";
import { NewRecipesSectionCards } from "./newRecipesSectionCards/NewRecipesSectionCards";

export const NewRecipesSection: React.FC = () => {
  const { dishesData } = useContext(DishesContext);
  return (
    <FlexWrapper flexDirection="column">
      <FlexWrapper flexDirection="column">
        <Typography type="normalTextBold">New Recipes</Typography>
      </FlexWrapper>
      <FlexWrapper>
        {dishesData.map(({ id, title, photo, time, authorData, votes }) => (
          <NewRecipesSectionCards
            id={id}
            title={title}
            photo={photo}
            time={time}
            authorData={authorData}
            votes={votes}
          />
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};
