// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
INPUT variabel summa (endast siffra)
INPUT variabel antalVänner (endast siffra, större än 0)
INPUT variabel dricks (som ska vara ett i decimaltal)


IF (summa > 0 eller antalVänner > 0 eller dricks > 0 eller inte är siffror THEN
    PRINT "Alla värden måste vara siffor större än > 0"
ENDIF

SET variabel totalSumma till summa * (dricks + 1)

SET variabel summaPerPerson till totalSumma / antalVänner

PRINT "Varje person ska betala summaPerPerson kr"
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE] // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd   = "FOUR"
    SET variabel slutOrd = "FIVE"
    SET variabel antaFörsök =  0
    SET variabel gissatOrd = startOrd // Detta måste vara samma som start-ordet eftersom vi jämför med detta ord i isOneLetterApart funktionen och då första gången vi kollar ett ord så har vi inte ändrat denna variabeln ännu och därför måste det vara samma som start ordet.
    // Jag tänkte först om jag skulle bara ändra på startordet hela tiden för då slipper man en extra variabel osv. Men gjorde på detta sättet för jag ville använda startordsvariabeln i "du vann-texten" i slutet av spelet + att jag tycker att det gör spelet mer ändringsbart för andra ord. 

    PRINT "Startord: startOrd"
    PRINT "Målet är att omvandla "startOrd" till "slutOrd"" genom att ändra en bokstav åt gången, varje gissning måste vara ett giltigt ord i det engelska språket   


    WHILE  gissatOrd inte är != samma som slutOrd DO

        INPUT variabel gissning // användaren skriver in ett ord (en sträng)

        IF längden på gissning INTE är samma som längden på startOrd THEN
            PRINT "Ogiltigt ord. Ordet måste vara samma längd som startordet: " + startOrd

        ELSE
            IF CALL FUNCTION isOneLetterApart(gissatOrd, gissning) = TRUE THEN 
                IF gissning finns i ordbok THEN 
                    PRINT "OKEJ ORD"
                    SET antalFörsök = antalFörsök + 1 // lägg till 1 på antalFörsök
                    SET variabel gissatOrd = gissning
                ELSE
                    PRINT "Ogiltigt ord, ordet måste ingå i det engelska språket"
                END IF

            ELSE 
                PRINT "Ogiltit ord, Du får endast byta en bokstav i taget"
            END IF

        END IF

    END WHILE

    PRINT "Du klarade det! du gick från ordet " + startOrd + " till ordet " + slutOrd + " på " + antalFörsök  + " försök!"
END FUNCTION    

FUNCTION named isOneLetterApart(ord1, ord2)
    SET variabel diffCount till 0;
    
    FOR bokstav FROM 0 TO längden på ord1 - 1 DO // minus 1 för att indexeringen i programering alltid börjar från 0 och inte 1. Denna FOR loop gör så att vi kollar bokstav för bokstav i båda orden med hjälp av index numret som i detta fall heter "bokstav" tar en anteckning om det är någon bokstav i det nya ordet som inte matchar med det tidigare ordets bokstäver.  
        IF ord1[bokstav] != ord2[bokstav]
            SET diffCount = diffCount + 1 // varje gång det skilljer en bokstav mellan ord1 och ord2 så adderar vi 1 på diffCount. diffCount får bara vara 1 annars betyder är det inte okej och vi returnerar FALSE
        END IF

    END FOR

    RETURN diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END FUNCTION    


//                

*/
