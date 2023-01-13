import * as React from "react";
const SvgYgg = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "64px", height: "64px", viewBox: "0 0 64 64", enableBackground: "new 0 0 64 64", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 64, height: 64, x: 0, y: 0, href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAa aUlEQVR42s2bd5jVxfX/XzPz+Xxu2bt32aWsIIIFO6gYsSRgomLQr5hoxBKNxpoYEyWKBRX9KSao UYNGo7HEEmP5KZbYY9Qolti7RogKssACu2y97VNmzvePu5REkIua3/M7zzPPs3ufO3PPnHmfM6eN AoSvkZTSiAhaCWhwVpPP5SgVehg2TPPnuy5im62HksQRuhRSKZXI1IXEYZ7HHnmPX55zE6UQLB4o hSNBIThRfb/wtbKL+jpX1Frj+zlIEhQl/vb4TLbbrh6xyzE6g8YiSUQcJ1XhOMFGMZ6kSeIQa0sQ e6A8hBKRzfGXxz7gzIvuJRIfQQHR/28C0IBbudjzs3/Lttv6pI3CJha0JXEKF/dDSR0HTjqFd99Z QqEIBOCS6vR8PWyxVR13X3sxRpUROjFW8CKDjQsUtObld3o5ZvIfsX1sKzSi3FfawVcTgDZop9Ak xO4FbPQJcXkZogJKYZo33upk4r5TMSaHk5jYhqDUFy4pokFp6v0MLurh3rvOYOTQFEIXYDE6R3th A8ZMmEJsDL71iAn/3wvA9310EjNvwe9J6RjPpBHPY8/xp/L+e70oU09oe8FqFB7oqLo5cV+4riGH ECEohASlLeJSZEzInmMGMfPCo8gYIZfyCdMNDBtz9ldSitoFoEz1y8qS8TPsPX5jbrz2J6RMiYgm DjjodF59pUKC/QrsrJs8pTj+wG2YcsIeBComVlkO+cU1vD/fEMUVFAZRgNTGR80CUEohGDyBzz79 I/lgCeWwyLtz84zf73SQLKgSuK/Vrq6B2QCUw5OEfzx6EUOCBagY7MBRDB9zGk4rlItr5qB2bjVo gfnvnIHRKco4th45g1gZtChQFkEjNUr+S5MGxENJQqZuABTbefdvx2O7E1T/gJF73EBkoFYg6nV/ JQA8BqVh6cfTCbwUrZ0DGbn9TGIAsTgSnMh/f/NQvXAkQYBSsZ0SsPXed1DJj0AVQj7+2y8ZZAA8 UEFNS8oXDuXL5kORpe9eJK1zzpQdttxAwIhSSkDJOud/waiu8eXnrxpZCQJk/Df6yUf3/VjmPnyi DPIQhbfOuWtGgAoABQqaG2Kef+JigqDEoUffzttz2wCLyIo1aiGFUhqDQvspgrSH1tDTcR8p+mBo DIYUShlqAua/UYkoghc/cPzflxbjlyJm3z+JZj8BAxp/rUuu0QYoBSJ1aF2k69NfUy528YNjbuPV 1ws4SljHepPCQ6EIdExX18OUelowroKTiLaumFE7nEcoTaB7+ryjL2FMFXjUc/6U3Zi0y6aYbIWR +91KrEGJRtZwBa/5V5Qm6zvmvj4dMSHjJ17MnAUObVOIDtd1la+RjIaWubcyoKmOJGlD4iyXXfEg Z523PypcRLG9wLKOLvY88AZaO1Ig6+/cKA0i4OkM++6c54op+9JNHd869EZiFyFrkOcaBeD5Pp/M uYpsaQkftWrGTbhghbe7biZUdVnB4HsKFce0LLwNogJ16QZU2uP4Ey/l/gffI3IaFPhxRKl0G50t 71LqbaW1U3PEEX9mcXuWsipVuXSA+CBxzQJ/7dELyJVbiXObsfNB0yn2FtYtAKUUvzxpD6ad/i2K Zcum2/6ORCxQrvEcAtKehcSyeNG9KNuFUZZiYnn4kX/xs5OvQxOyxWYNnPXz/XjplfncOustrI7Q seWzf12EKi+kc3lCiGbsXjciOkvBhiix66EUDfgUef2hH5EOFfv/4hbmLl0XAoyiMdDM/fDXZDMh jRv8n3W4mQHoGMRgjMImQoaEt16+gkymgk57NKSG8/ubH+Gc6XciKHbYzHLluUfTtEU/nBqKhC0U WiMeffYTLrv1SWycJq0qvPPmz0nbFMWODtp70hx29B9YXEiDZ1FJjGiFdgbRyZpVsuq2kkN46a7D sCbHmENuQuERq2TlrlcTgEErx+KWKwmSNma/Agcefhliv0gXM6DKaPEYkEl48rFTGFg3gEiF4PVj 52+dQVspQy6ocP6Zk/jpkWMg6SaMPBZ1eMwfczb93nmCTQuP0xH3UCmm+KDF8bMzbyZWAYGKmTfn Coqtc0gqmq7KUqZd8BTPvRniUIiO0M7gWLtapFJ5/nr7z+kvLejG4Wy7zwyqAaT8hwAU+ALLl15C T69i6IizMMrDSrLWxRWw1VC49pIfkU2F1PdrJshvwA7jplGIfAId8+drTubg47cj7ujCJiEdsWWP A1/hlae/y+NzAobFLUye1solx8U05bOUSwVim+aT9oSfTLmdINWA8br5+J0rWL7gTSQO6C2HXHPD 89z92CLcOoyTAgzw4u3H4JOw69G3E9tVsF8NARqxT9DV+gY7jT2bTz5LoyXGrdGnVIzdOs20KQfi uW7SGYN4DUy79Clmv99KygVce/mPOfjYnck0DMI4aF/0IMefFfHYpxMIyp3U6TRLns0z6DvLaA+G 4PttbBq9wNSJXWy58RAqrkAYebz9mWH6ZbchKo2LKvzzrdOJu9vApens7eX4U+/igxYwscGyhsNS HgDH7rcJk48YR483gnGHnPN5FfANLG29gGKlxCbDLiNRVBMOa3BvlYZnbvoegYZy4nHS2fczr9Ng E8Urj89gp+0MsdeL5BSlMM2E797E6x3H4XKN5IIM+XIbXXogpWwTmfJiKn4zPt1YBRJbxg5+k0O+ +TEbDorwwhRF5fNJa44LL7uDJNFktOP9d6ZhCguZPz/D7j+8Hr02LGjApfBUxMv3noSTLr558B1Y pRDpS6og0PLpLTTWzWfYlhfS0bly5hphlVbw5E0TscZjj6Mfo86PWDLverLpNpIky3wzmHS5gcRY soEh5YFKCiSJxekKu4yeRUv/A7HpDJ89nCe18GmkcSA2TOMkgiRBYqHoddMc5njmH8+QsTk6taKn 1MQp0/6Mkwxz3zyWpZ928+1D7kBEcGu5Ilac8oQxzcw4c0/+8kIb0696Hk2CBwojQjbbilU+vd0r pn2BbilQonBiUSphzhtT6Zn/Op3pDBs2D+f+h3K8vuwbOAfV4FwTuRilFAP6e8x+McNu+93NMjuR zffupuWejejSOU750y4kUo9RQhFN3sGVR85m6nUD+P7+Dew4uINGerj28p9w0hl/RusAtEWcVHe5 Flohl9mvLUW0YZ+x2/Crq54BBI3TaCDrBYgegNJ51kWuTzZiPQRFua2EaRzLsH0WUbfza5y67wdk o7cJxVKWhCIhkSlRUQUWtRbY8vgSbzx8Ao10om0zW//UY8OeeRTjAGsUsYBRvTzxwrNMPK2Xp+7e mqv+siM/OreISmdRtGGdxTf9UMqtK8u2ksr4GKmnLu4iUA6nBO37irffvJ5KVGHGJXcS2Z6aFhNd TVejhUrYg6d7UbkNCc0gJl81l6t/2Y3odoQE5wSX+LjEJ8Kx+7e/yw4ntvDRfVtSCbqwUT9ilcfU WxxVxuqS/uTrHbuObqcSBdhUCdW8NV6g8WKLUhHaJFgXorSpiWflxyzpzaDSHmf+Yt++HIczDBlS wqH5w9UvfSGUVpDvVS2rUgqcIwgCurp6UaQRX3HDrH6Ui63su2kLJYq4yMNai3MOJKYUhfRGdSwu dZDRwvnH9HL6AxbTm8FaSxRFPP3aQ6Qqit/s28aY4xrxohw6acKYAE9Xrb21tg+RtfnpKvaYdMxv cdryvfHbgNVoax3i2khEUawArm6dCxljEEBhQFcLIeI00JcAJWCb3e7hmPHvoeN6rO7BOVdl1Pk4 EXbdfXd2O2YJD/+2wqG7LGdOx2GUXYGwUqarczmeamRQ+l3Kg8bhZepJggSX6QJj8E3116uGWvXZ mVrII/ZziFKopA0f0L4X42IPn2Y8E6BUcd26FIU4pMqAQLlYJjAeSlVQIoip4OrHQ7qZLdLv46Ru pQASFyNhQm9vL7HxGDGkgwsfraOkypRiKBXKfPz+HIyKuW96nlFHLqDH5VCJRWwazzOkfYOIR6Vc QZOtmmupJfvjiOMIRx4vCPBw6HHjBqElzcsvzyG0pTWGjP9JVsCJwTMVUB7pbCOSlIAKDo0SR3fU yYCtH+c3J7aQJAtXqoCIICJYa9l8m33Y/ccLeGnRt7GVmCQMqRSLeKrEwI6H6WhfTNkNXwVhLIEn 5OoaqZruAoGXo+rrrZtxg49gMUEDIgkD+oG++brzqLhefnDYpTXCqIq4RNXjnAdENA9sRCUK5aoZ WxEfJI3NbYFnhB/ttoCMZJCkioI4jkmSBEcX/UYdh0SWJIkpVyLmffIGJlXPo79pZNK5eXztoZwg GAwGGy6ncUAzSqdRqkCQzaDU2jzWf6eYIko5zrv0FjK+z68vOBod+GCdWr8sj1Z4qTzKxigLjRtu hy0uqcbqSq0cVqBxi1kcu9N8SkELZSkQRRFJkmBttWQWxg5rHbETGtIa41LsMfBJ4jjFUrUHkV6l 34p26rIZPmuJwIX4WvHqmwv6UFtboCwiPPviQnpLZcbuOgptkyrsazSk1UUw9BYsgdYEGu6+9ymk shxrK2jUyvKX7xzJ0K0IU/05b0KIi3uJ43jlcFIVfCIO64S3X55NfQjTj87zjXNSWJmPsb2AoJQm 5RcRZ/nVjBswqowWOPfc+1dyVSs5A40DGomLRXRcLpFEFiXrkYiUhJ+f+0cwaTwHp07+A2Lq2Wn7 fLUu0peBjFF4hQwb7fYYo4e/iA5DEmuJk4TEWpxLELFYo0lJhHEVdh36PMQG9FZgBoJKYYMIbYUD 9t6SOp3ho8UVMgpQKTq/RCY+DiGOE2JXQpeLRVwEqtacF4B4LG+Hom3nzhtOoS0BiWO2G9xezSgr A8ogniKxml62omXhaP5+RbTSGFZHFXk6DvnnS7Mxtofzj8yzy/Q8VqVWQpY4g1+XZ/SgZeBrIuDY 47bF8w1Oe+svAaq+QxAEaJSh0tOL8fscmxpIkxCjiHUDGW8RqBTdFsZtU1i5ea18lEv1ZSoTvnns 08iyj7Eu7nNc9KqrMbYor0RzzyeUdAM2sxXaKUBhnGDiNJVyTHfPJ7iMxhk469x9kNBbL9VddYDg +5pYVfCMrsOYEN9AWFu+ESXgtEFsDl+6EIkYtv2W1Hmf4eGwBH0lwmqpG2Tl9SdOkSSuz3BVQ1LR oKSHp5/ahTGHhASmiYrXSfV60yhdwtiP+fHEcWSb+2OUT6m9gA4ilEn4gpzNGimTgmwmSzY7GB1W NFGpjK1x81W2fXRguem2ZwlQNGWECRNmEJbbybC0WohQHiiNMh4Yr1pcFSFJHM4JImATwVnAgrNN EFeQxmYqdR142oJUjZ81JY7YPUcUL+DK6x5HJzHZIKRQGllrEXgV70qx+eYNVEohzzzzD/TU828A Ldz8u+OrwU0NVZmEGFsRHnhhAUUpc/f1k/mgpQdNzGk/FqxXxuCqjqLyQaeBqu/uEktiLaFNiJ0l draaeJWYrM5RCVNkyxmcFhBFYhRB6GPULDJ+lpk3PcJtNx4OWrPT2CkYyda8eU0WQXHXjdPw0ynO vPAe9HOzF1DuEUZs0r9addW1K5XvZ9FJChUuQgSyQ3fmoG1z9NcWJ1UPTWm/Wu4ShYgijhOsFZxj lVqIoJTCGIM2FqWTvrJjleq9d7ns9COJ01lIsuyz12i8bJ7YGlytsTAAMUp5pLwQbTyWd4KOAFyJ crkD389WvbkaydkSNI0EKbL1UBg54RyylXZmnDIQSYegsijng3gYFOUoJBZIRKoGEKmOxCKiSCkf g6WS6wVPk4ryBKrAdRc20aSh6DWSooS4hRSiYVgywLpjlxVklI9GY3QHmgSHRls05TiDLUcEpof1 cSgSpzngiIuJIsf0qQeRy2xIe2/MSP85GmOvmm3TJVBVRbVikdVO7N/DWAWWqlurEvzYI8y20ug+ YaeN+9ErZXYdex5z//lHFB7bjjwNpYooqf0ajCUkH1TwtEKCLKg02vnC4mV16BJM+v4onK7dGoqC ok2jvEE0ZSqE5UX87p43yTjLe3c1MHnnpeTdAkQcui9sXp1WGEbpS5uFUULgWXxdYu8Rb/PSzdtw 8sTXGZjr4cHnWqhEMWk+pDtpomirDVWO9bgCfMtfZ12EFuHO++aQUKry0JCCx35/FAWtmXDsvYjU BiutMohK6J+Kue/qQyhIyP4nPMI7s35CUu7CBnWEXn/2uCjPo9M2Ix6c5ojLUp9bxxkHXW18cH0b ux3lwAjv/2kA7d2t9A8sri5D86Zncfiho5l54Vg2GXU13ZXa9706yJa8cTYZhP47XoJVGi2iqYhP V2zx4x68GvIBqyAQISqmvRJQ8D3qEoWHZdyh15Hg07nFvrTl+/H3K4SBmy3hhxcLUrV+/zZSMaQa 0sx+ZzC95b9zy9SFvNU7jGXZsfQUyuzwjXNwkuWqGftTkGYKlXXnLddEGQHtl6kEHtoLAKlmhSuh Igr6U1dqIZuC7nKfuNZhD8RYjAtwRPzw2Dt5+No9eOz6wxh/4iOEehgft7Xzlt6Lw5fdhE43Uvzn Aoz2Vur+ivKUCwyEAT+fq5l3+xbMLTTz935bMbrwKd/YeFcWdFhs8S+0LXieEdtMQ6gtB7j60SuE vcdtjEbx7GvdRDai6muiRWvQzvHkTQcTxk38z0nXI/goqb3bynjw23MPY8fhZbplMIeedDev3X8a xXgxSY9mQKqDlmIdl96zbOWcig0JIyFOIkQ8rFP8z9hFnH7CBJb29GdAUz1DR57N9lv4PPngVKxu YsDwyWgVrrUG8Pmte4hK8NC0f3gBWoTmHS6gHFUX8KAvKEFRVkPw43lsPgjmLrUIaaA2ZZNEc/bl 9/PQzP0I9GIGZbsYtd/5zL3zBDqknfy22xF+tAWnHP5PvL6k6sCNNiCVTxORpT6wZP0SDfESoqST Zp1myIhfEtSnuePms/CCHBttfgqKGCdrL9p8ji8FSgKOOmgIKoppDwdRXq3k/W8494Enr5pEgYAD J9+JI4VbzzbUzQbArTO/R7loOODEB4iBl287gkAcxYE+E6c10C47o3QW8cr4kjA43450LufiQ55n 0ve/SyVJ0TzqLIJcjkUfXE2suhk3bgpzWwOSqNY+hVU7VAIL/jGFQQ0p6kbOIFlNdnr1P2MD7bHD Tzo55UfjcF+iCfWznjzzlzdS1wAP3bofDs2Yox8krPMZ2O3zzPnLKb0V0SQtqFAzONPFXdMcc26K +e6e36KlrZ0NRp1FjKJz6aOgyoSVIXy4IEDi9dw8AHV89NrvyGcEckNJtK5msz+HAAVGPPplhdun 709MkaOn/o3O9Yy0clmfQlnx+I0nQvkjVEZx8PF/pdeDxgRefuAItCfg56hvisA2UpaIrNQxv9Vj t0kzyGR8Pnj3Nwyt78+S4kA22fwgrJQQCZD1ORQFWYFP3ziJIOhH8/Yz0A7C1XD/OVNvjOHgPUdw /F4bsyzWHHne01gd1dwjpFW1W9ZzcNeNP2FDbzEu63Pngwu57u438ZTinpmHM2ZEPaJiJOPTW8zw zYmXU0hlaUqXePf1meSDRuJMngGDDyKxX6b1NoOHYuGHp1AXVtj1wCv5YP4aZfR5Q5/KZrnrokOo ZwmvzhOmXfMUUmPvqVIKUQLigRgeuPkw0pVWGpvy9OoMPzjidopK4Ukde40ewIuvzqfHV9R5OT54 5Qqy6SKKgIregC1HHkUpDFnvgB/wDCz68BaC4keUzBCGjT4D6z6PnjXGvnG5xGGn34pL5RizScCQ OrtSXHodwZeIrGxnVSriwGNv449PLUP79eRdGy/OOpwXZp0GcYHHX11KAbhy2gF8+vo5eGoJ2gs4 6hcz2WjEJEqV4nptXmnIpLIYL83ozX1S0Ud0SoHNtj8duxbVWUujpEIkQ0aXuPtX3yHj55h63Uu8 v7BEbENkvSDpAY4U8OJjU3DFfxH4WazR+DpLuk6jVQNeQ0g2tz0bb3UMpcSD9fHxVzvOtDeAgw5o 4NLJ+5LK1DNkx4tJlNfX6LGGlsg1fqo1WgSnhJ029vn1SfvQkPU547rXeP69lvXjCNfXsGXwUx6p SsizD59IWnoRz+GnBpAEaUbvfhkxuq/g6iFf4hVIkKrj0IlDOefIsWQbmxgz4TLaK1XIrvA910Rf 3NCMkb1HNciTV3xP/nb5/jK8ofoZ+ks2Nmsl2cCXepCbrzlNGtPVz40xX6FZOiMKZLtNA5k3+2SZ +/efSr6a+lx3w/ZaxbISIwFKLCM3tFwyeTyBl+Wlj8v86roXiOXL3MsplAoRpVGu2txQq1u7Zv4g 4+V5YtbJbDRgERIPYse9fkO39fvgHa9reo3uvoG0hYeu/h4mjCiZHIedOouiAsRHoUGFNRVXv8pu lRbEGTDVXre0g+eeOAVTXk5d40BGfedKkto95fVryVYqR6AKzJp5Ag3xPMpG8Y+5PtP/8BhOGXAK RfJfejCzggmDEjBY7rh2ClsOaUc7hWnanh2/cxohfW+bajSi6yGAFe9QFNr4HLXPVhy656Z4RCQ6 z6kX383cNvpeeP63RKBQCvbZdRBTf7Y/uXRELPWcffksnn+zm4QKylVfpn39b4b+g4IgwMQR9/7u ELJRjHUhcbABJ55/Mx1FKDgfdIxODBqNUzEiGlkHNrWqbkD1lVgwgjiPrEoYNhiuvOBY0p4imzZE fsD4SdcQ9qXWvpxIv8JxBRgiI/jW8egtU1A9HyNRQqI1vtfEA8+9xS0PvktZ0lXHyHNI4laW4FYw vfr/ygNJDHg+GSpMO3ki39lhE4qlpRgNztOQ2ooJR16AM5pUogi/wlO9r4ZXBcgq1fARbrnyWOpt F41OiBQkJDhlsDrP4o4eLrrqQbqK1RfAsa1W0gNTvbA2bIZfn3EcWb/aJmcA7TwiF2NTaRZ3J/xs 6l3EK9sCDaLsV9K4r1VhPc8jScBXCYGCS884lOEDE3x6qhWiGLQY0B5+OoO11ays9TSeAUkixCqc rzHGEUkDn7QqzrzoT4QK/EwjSdizsjvs66Cv3WIpfCCpPjLUoBNDoDSexIwY7nHG5EnkAoVHTFIu IiJk8oMohEIp1vz293cyd16MVSkqklRPGPqQpvhSLvIX0P8CYgosEcRM+DcAAAAldEVYdGRhdGU6 Y3JlYXRlADIwMjItMDItMDNUMDU6Mzk6NDcrMDA6MDBGhdPdAAAAJXRFWHRkYXRlOm1vZGlmeQAy MDIyLTAyLTAzVDA1OjM5OjQ3KzAwOjAwN9hrYQAAAABJRU5ErkJggg==" }));
export default SvgYgg;
