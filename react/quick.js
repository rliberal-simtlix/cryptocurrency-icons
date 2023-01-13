import * as React from "react";
const SvgQuick = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "65px", height: "65px", viewBox: "0 0 65 65", enableBackground: "new 0 0 65 65", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 65, height: 65, x: 0, y: 0, href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA CXBIWXMAAAsTAAALEwEAmpwYAAAPWUlEQVR42t2ceXxV5ZnHv++5a+7NcrORsIctrANBBYTRNihV O7Zq1drWwoCtnZnqVLGWj9OpHajzcUbHGbd2qFOppqJWxSq4jRWU4MIIokQUDIGQBEJIQiAhucnd znmf+ePcQFa4NxBw5snn5t6c+y7P83uf7X3ec6I4SyQiBUARUBB/ZcTfu1I1UAO0AGVAmVKqZbB5 U4ModAC4Bvhq/D0wwKHKgE3AWqVU6WADcqaELxaRjTI4VCUiT8a16stHIrIkzuTZoi8PGPGVP5vC f3nAEJGAiLx8DoXvSlUisvRcrH7zuZa8D3pSzoZWiMjycy3pKahqUIGII/1/gZpF5Jr/dwDsq6wa SLfFichmJAoAsGTQVOzUHNDQdGQgHUtEpPi0QRCR5WcaAIn/aBE08ZdYCBYivVu/+/7HmFZC69UX vSwiRSdr4DwFAEuBFacrMoAWqD0aorIpxM7qRqrb3dQdbsOKZ+4KYVRuOqPSYkwensXUkekMSXOj RHh05XPc8ZMbB8pAIA7EzP72If3uHcT2sFWnC8DRYJQNu4+wfkcDFU1RFAoFCAqFxEFSx9ujQAmg FQumpHFhWis3/Wg55Z+tJcXrPR1mSpVS8/v64mSasHFgYgNojgZDvPTJYdaVtdAeDoNy4DEU6W4n qS4HbsMGImZahC0hrIWwpYlqQYC8gIcFox3cessjuIaN4emtDSyaOwyvy8kA933FIrJUKfVwQiDE /UDBgPAWzX/vqGf1/xziUJut7LkpbvL9bnwuA0sgagpRS4hYFlFRpLiFwiF+Nle2gihGZ7q497oJ HKmrId2fgkyYx7NbGnhnVzO3LhjJvLGZGMaAfMRyEVmrlKruerHXSHEzWDGQGWKW8MR7B/j3tw5Q 36bJSXEyJ8/PlBwffreDmAURU4iYmoipCZmCOBQ3zhvKdbOHY4pi7lg/991QyPCAhy0ffs7u+iDp owsBONQW4Zcv72XlxkoEGQiLAeChnhd76ZWIlAAJxdeu1NgWZdX7+1m/oxmXUyhIc1EQ8BOxhKhl Cx3r/Kw1kSj4U+Dm4mHMGZ+DRvHCR4e4/oI8HIbB08+8xj/d93vyL1uId+go2090YfuCER7u/+40 DDUgjZjftTbRDYSBOsNQ1OLuF3exvTaEx2Nwfl4GHqWJaSFq6jgQYFomYVNwGZp5U3L5xoxccjLc GBh2oBRFW2sb996/ipJnXiVv9mXkzL6094Ri/yoakcKD35uKUo5kWe7mJHuCkJQWCKBFeOitGl7/ tJEUl2JWfjouQ9lOztLH7T9mabJSFQumD2XOhFTSPB5QULG7isLCMbS2BXl+zZs8XrKW/QfqyZ1z GTmzLkGJnJSDSyYGuPubE1HJ+8qZSqky6O0Yv5rcOMLqzft5fcdhvE7F+flpOJQibGoiliZmChGt MU2LK87L48rzcvE4nURiJu/vqef3j67i4vMnM3HiGDa8/SG/vOe3ZGem8+v/WMawKdNpiRlU1B1j c2Ubhzt0H5mdYuPuY0wbUcs1M4ejkkNiCbC0myaIyBLgycTF19S3hLn5qd2EwlGmZnvI8Xttr99l 9SOWxuFQPLhoIqleN29+cpDntjezff07+Oq28MbalQiw+Ie/YNKkMSy74yaG5GbFBRIQO7ssO9DK pi+a+PMXx4jELCTOuqBwGcLqm6eQl+GPZyEJUYtSKrMnCGuBqxMGQTR//9QX7GpsZ1SqmzGBFKJa E4nZviASN4WwJaR4nTz8/UkosfjXdeXU1+whP3SIH//wWkaOGsYnZTvx+/wUFhagRPUwUg3xtAoR WjrCPL25jo27W2gO6TgQMGtsJv927ThUco5yvlKqtCsIiccc0WypauWuP1XgdRjMyk8lZgkR0yKq DbwOk6aQJmTagMwYk8bYLBc3zB6K2+W1RVJ0WbWuWeMJCofDfLL9c4IdMY4cOcqFc4ooGJmPKEVb KMajG2p4p6LZVhgMHvj2eC4oCCSjDY8opZaqOADFJJEharFY+txuPqsNMiHgJeB1EjUF07S49crR vLSlibIDrUS0ZuFf5nH9BcPi6p0Eez0o2N7Oiy+9zZo//ZmvfW0usWiYITlZ5E2fzYNvH8K0hOkj fDz03SnJaEO1UmpMp2MsToahvQ0dfFbbjsOhSHcZRGO2+i+ZP5RJQ9O4fjZMHKq4aFIueYHUfkQX duwoJxgMI8CkiWPIysro17ml+v0sWXQV115dTMnqV3j4N89jWZrp09az+NbF/LHCQWVjmKPtEbJT UxIVpUBEAp0gFCUDwkfVzYCQ5XYR1RCzNBOHe5k1PosXXnmPPXVt/OLvrjzFugtp6an8ywNPsPG9 bSgMvClOii+ew7w5M/jmX81jaH4+PWNfeno6P7nlRi6/6jLuWvUBldW13P+7N/jKtNFU5xSxuyHE vMRBACh2AKxYseIuID+RHoJFyft11LfGyPO6AYhqzfUX5pPidvFpXYiL50xiWKYP6PTw9kfpNH0R UJpARoDrv7WApiaTPfs60NrJnr21vFP6AY+XrOXw4aMUThhNRkYqXX2GUoqcdB8LLihgV0c64ewx NDqz8ekwyu1h3vjMZEDY0ukTEnSKQiim+fbKMjqimnHpHmJaEzEtHl08mXSvC7fLEXd6UN9wlBfW vEnZZ/vYvqOc2tqDGLjQEiMjw8e0KZMYP24E5583lWdf+JSKvY2AoC2TSOQwkehhUjxu7ln+tyz6 3lXdTKVzt1p7tINbV+8iGAWNoiDg4IkfzcRIxjmKfWbYnGiPgy0dLHx8Jy4D8n1OwqagtcV/3TSV 7HQfAG+89R6/Wfk6X1Q04nKmoYy41Ylhs680ZiyM1iFi0RZiVpDU1LE4nf5uK67FJNRRSyzWwg3X XsrDD/wDDofq1kZE+KTmKHeu2YdC4/e6KfnBFHL8nkRFKnGS5EFpTUMrNuYGYRNClhA1oUMM2moO cvc9a9i67QBKgdttq6VW4MnMQrldtllYgkPHiDU14/ZkobWFSIyeYdJQTvz+0UTCfp5/cQOxmPDb X/9jPGuIV6SUomh0JldPD7Dus2aC4RgxUycj0hgnSdYNjkXilqMUHaZFWAuWCC9sqePVDZ/TsKO+ my/zFI4n57yZiKN72BIE2kMEDx0iUr2fWGMjfRulwuPNBcPF2lfeJiPDx33/fHs303Aogx9cPJI3 drZgWoKZHAiJVZtPMA5WRwiUwtJ2Nmhpm/NXdxzGyMkn85Kv4MzKQgBHipdA0fReAAAoMTB8PtLG jyPn0mIoGIFlaeinTuBxB/CmjOQPq1+jdNO2Xu0yUjxcPjkAQCQaSxqE6kQbK6D1QDnh+lossTXg hFAKUeDJySbv6wsYcsUC/JMnQ0tr34IpQToXUymGXTiXdhXE1P2vosebg8OVwW133k9PXy4KrizK Rwl4vQn7g+MgJEHCkOx0Gj/eCP0GFGVvarKzSZ1ciCM3m4RqgoYiZ9pkWtrbT1o18vlG0niklaee eaUbuApFXroHv1dhJJmWGti3xiRIigkTCujYX0HwQGVyM50SXoUvfzhitRKOmv0zbDjxenL5z8fW 9NKGTJ+T/Aw/WaluSLz8VmXEa/EJA5GTlUledgaNm1/HikTOKBCR1mYMYkSinQJ06kR3gTyeXGpq 69m5a0/3ARTML0zH4zBIoiJd02kO1Yn28Pt9/MXUsUSa6jn8weugrTMCgADtlTtRIoiKj6kUzcGO XgIpw4nLmcrH28t7YKCYPS4j2SpTWScImxLvo5g/fw4CHN21lYZtAzqe6IVA6FA1rft2opUXJREQ 6AhHiJoWMbM30E5nBuUV+3vxNi7Xn+zs1Z0glCXT66K5M0hLtbPDI1s30LztnbijHFAZnEjLYfa/ 8TT2WgbxODqIRpsIdRzst4/D6WPXzr29/IK9jU6qunRcE0qTYbpwfAEXzZtxfLK6D9dz8M1niLW1 JDGKfRAbOlBJzbrH0aGgLZx0EIsepaOjFpTVL7CG4cJwOJOYr0/6FOIhMn4iU5NwV2Xw47/5ThwE e8N8rHInlWtWcmTremLBYxzfQfbVXSAWDNL07qtUrVuFGWyj255Bd0YHe1UdfSRbhuFExEq2uNqT SqB7tbkEWJ5o7zmzpnHjdy7n2effPMF8R5CGrW/TuG0TvuHj8Q8bhTs1DVEGiKDQRIJttNdU0N5Q jRIQZfQ4WDlBGh9OQ2H0Iai2TCZPHk9/pbkEqbQnCKXJgABw520Leff97dQebOhyVSHaouNAOe21 5fbuqUvttDPkqXie1i8AyokWH4GUvk+iLR3monlFAxUeYFPnmeRxPYsfS5UmPoZi+Ih87r7rZkR6 5/yCsnNZdUL4rvndqcgkC7fbhcfVl90LWrczZeK4hMbqh0o6P/Q0tkeSGUWhuOaq+fxs6SJETss2 u1GMAIYjQIavnzKZGFy+YDoFBcMGOkW1UqpvEJRSa0kicYr3Ydkdi/np7d/n9O8XV5gqA8OZQ8Dv 7XcP4PVY/HzZomTPGLrSr7r+YZyqQWJAGCy746+58/YlAz0lRlCYZON05ZOZ6sNp9B3vRTSLF85i 9KiESqJ9UTctgH6WTkQ2kmQZvtPqH/vda6xc9UcaGhq7XFcn6WUgygtGLj5vGl73yWK/5rprZnLv 8oXHzzEGQDclCkIRsH0gMyCa/XVN/PRnj/HhR9sxYyGEWBcwOt8daOXD4czG60nF7XScJOYLbreT mxcXc9stX7czk4FZ3ialVHHPiye7cWsFSYbM7v01H360lwceXMeOnTVYZghRGsGJiAu304MyBOOk 9xYoQDNj2mh+vuxKiqaPsUPrwBKkFuzj+OqEQYgDMQCz6A3Glq3lbNhYznubK6iqaTxFlieIQFaW n4vmTuQbV8zgwtmT8Hpdp8MG9GEGiYJQgH1GWXB689tH7Kal2VNZT/nuQ+z4fB/hkInEU2MFKBVh xvRCxo/LZ8K4XNLT/PatfqcffX+llFrR35enHD7uHzYy8GeYesIR9wxdkivpLJ93Xjujj2atVUp9 62QNEprtTANxFqkM+x6ElpM1Siiox+/tmU9S9chzTpsSASBhELoAMZMkM8pzRH9QShUP2jOVIlIg ItvP5bMPp6ClZw1qEVlxrqXtQVWSwLMNg6UVVedaehF5WOzT9XNHcvYfDO2kUvmyPCDaA4yyQRa8 WeznsYrPtbynAqNIRErOsHaUishSGQS1H7Sn5rsCgr3/KMZOv2ck0K0GOxSXYZf8SgfzXwgMOgj9 ABOIAxLocrml83U2/mdCV/pfSUbd4XKwXSAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDItMDFU MTc6NDY6NTErMDA6MDBLPNkpAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAyLTAxVDE3OjQ2OjUx KzAwOjAwOmFhlQAAAABJRU5ErkJggg==" }));
export default SvgQuick;
