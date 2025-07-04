 //Esto es la programacion de la ventana modal nueva
               // Datos de ejemplo para las galerías (reemplaza con tus imágenes)
               const galerias = {
                abstracto: [
                    {src: "assent/cuadros-categ/abstracto/15.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/23.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/69.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/163.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/173.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/186.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/188.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/196.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/217.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/362.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/366.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/397.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/428.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/460.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/462.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/465.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/480.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/485.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/486.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/490.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/15.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/23.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/69.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/163.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/492.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/507.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/513.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/530.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/548.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/557.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/572.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/575.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/587.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/600.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/618.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/619.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/637.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/646.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/652.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/656.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/670.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/682.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/687.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/690.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/694.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/709.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/713.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/715.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/716.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/719.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/732.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/742.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/767.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/787.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/788.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/815.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/822.jpg", alt: "Obra abstracta 1"},
                    {src: "assent/cuadros-categ/abstracto/825.jpg", alt: "Obra abstracta 1"},
                   {src: "assent/cuadros-categ/abstracto/831.jpg", alt: "Obra abstracta 1"}
                  
                ],
                bodegones: [
                    {src: "assent/cuadros-categ/bodegones/9.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/21.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/25.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/27.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/44.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/73.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/106.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/108.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/109.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/138.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/145.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/147.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/150.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/162.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/183.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/191.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/203.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/214.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/229.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/247.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/292.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/296.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/318.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/330.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/338.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/360.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/363.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/374.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/377.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/387.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/405.jpg", alt: "Retrato 1"},
                   {src: "assent/cuadros-categ/bodegones/423.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/440.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/481.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/500.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/516.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/528.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/649.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/653.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/657.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/672.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/728.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/735.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/737.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/738.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/740.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/741.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/751.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/752.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/757.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/bodegones/759.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/bodegones/820.jpg", alt: "Retrato 2"}

                ],
                caballos: [
                    {src: "assent/cuadros-categ/caballos/18.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/19.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/24.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/77.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/81.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/84.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/94.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/125.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/155.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/174.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/181.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/199.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/201.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/202.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/206.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/213.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/228.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/244.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/246.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/249.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/250.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/251.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/254.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/261.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/264.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/267.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/268.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/271.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/273.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/274.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/280.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/282.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/283.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/285.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/287.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/290.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/291.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/293.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/295.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/297.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/298.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/300.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/303.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/305.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/308.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/310.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/312.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/316.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/317.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/321.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/323.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/324.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/327.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/328.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/329.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/331.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/335.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/356.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/357.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/358.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/359.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/369.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/378.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/391.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/429.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/430.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/431.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/438.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/442.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/447.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/484.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/491.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/518.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/529.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/538.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/564.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/566.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/570.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/576.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/586.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/589.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/601.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/603.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/607.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/611.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/620.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/621.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/661.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/667.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/684.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/701.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/726.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/760.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/790.jpg", alt: "Horses 2"},
                    {src: "assent/cuadros-categ/caballos/809.jpg", alt: "Horses 1"},
                    {src: "assent/cuadros-categ/caballos/812.jpg", alt: "Horses 2"}
                  
                ],
                diseño: [
                    {src: "assent/cuadros-categ/diseño/31.jpg", alt: "Designs 1"},
                    {src: "assent/cuadros-categ/diseño/32.jpg", alt: "Designs 2"},
                    {src: "assent/cuadros-categ/diseño/43.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/62.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/64.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/65.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/70.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/75.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/93.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/166.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/212.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/231.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/233.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/380.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/395.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/406.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/427.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/448.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/487.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/584.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/633.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/674.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/677.jpg", alt: "Designs 3"},
                    {src: "assent/cuadros-categ/diseño/678.jpg", alt: "Designs 4"},
                    {src: "assent/cuadros-categ/diseño/695.jpg", alt: "Designs 4"}
                ],
                flores: [
                    {src: "assent/cuadros-categ/florales/52.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/5.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/10.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/12.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/14.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/16.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/22.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/29.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/33.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/35.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/39.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/40.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/41.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/42.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/47.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/48.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/1.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/55.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/57.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/61.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/80.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/83.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/89.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/92.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/99.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/103.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/112.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/113.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/117.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/118.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/120.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/121.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/122.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/128.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/129.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/130.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/131.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/134.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/137.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/139.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/140.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/141.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/142.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/144.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/154.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/157.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/159.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/178.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/180.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/182.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/187.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/197.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/198.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/204.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/207.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/208.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/215.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/216.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/219.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/220.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/222.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/226.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/234.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/235.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/237.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/279.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/281.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/319.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/361.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/364.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/367.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/379.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/383.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/386.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/394.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/398.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/399.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/403.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/407.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/410.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/412.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/416.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/419.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/420.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/421.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/422.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/425.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/432.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/434.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/435.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/436.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/439.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/450.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/458.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/463.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/470.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/471.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/473.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/475.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/488.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/499.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/501.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/503.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/506.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/510.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/511.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/512.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/515.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/519.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/522.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/534.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/535.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/541.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/542.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/550.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/551.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/554.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/555.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/558.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/560.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/562.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/568.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/573.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/574.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/588.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/592.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/596.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/597.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/606.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/612.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/613.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/615.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/616.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/622.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/623.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/624.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/625.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/626.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/627.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/628.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/630.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/631.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/636.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/639.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/644.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/648.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/663.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/665.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/671.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/683.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/688.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/692.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/696.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/697.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/711.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/724.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/725.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/730.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/736.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/739.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/744.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/749.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/754.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/755.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/761.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/774.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/775.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/782.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/783.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/792.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/793.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/795.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/799.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/808.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/810.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/814.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/817.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/823.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/827.jpg", alt: "Flowers 1"},
                    {src: "assent/cuadros-categ/florales/828.jpg", alt: "Flowers 2"},
                    {src: "assent/cuadros-categ/florales/830.jpg", alt: "Flowers 1"}
        
                ],
                humanizadas: [
                    {src: "assent/cuadros-categ/humanizadas/2.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/3.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/4.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/6.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/7.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/74.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/78.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/88.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/90.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/98.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/115.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/115.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/123.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/127.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/135.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/172.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/200.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/211.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/218.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/221.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/226.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/269.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/299.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/344.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/373.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/376.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/381.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/388.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/389.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/404.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/449.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/451.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/452.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/466.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/472.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/489.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/495.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/497.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/498.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/517.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/520.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/527.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/531.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/532.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/539.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/545.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/547.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/552.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/559.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/571.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/582.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/594.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/602.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/617.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/642.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/721.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/733.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/734.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/743.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/746.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/763.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/768.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/769.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/773.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/780.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/800.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/805.jpg", alt: "Humanized 2"},
                    {src: "assent/cuadros-categ/humanizadas/806.jpg", alt: "Humanized1"},
                    {src: "assent/cuadros-categ/humanizadas/807.jpg", alt: "Humanized2"},
                    {src: "assent/cuadros-categ/humanizadas/811.jpg", alt: "Humanized 1"},
                    {src: "assent/cuadros-categ/humanizadas/824.jpg", alt: "Humanized 2"}
                   
                ],
                maquinas: [
                    {src: "assent/cuadros-categ/máquinas/789.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/82.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/91.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/96.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/164.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/167.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/170.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/193.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/239.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/252.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/278.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/286.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/289.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/301.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/304.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/325.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/332.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/333.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/337.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/342.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/346.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/350.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/634.jpg", alt: "Machine 2"},
                    {src: "assent/cuadros-categ/máquinas/731.jpg", alt: "Machine 1"},
                    {src: "assent/cuadros-categ/máquinas/71.jpg", alt: "Machine 2"}
                   
                ],
                animales: [
                    {src: "assent/cuadros-categ/animales/8.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/11.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/13.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/37.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/45.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/46.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/54.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/56.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/59.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/67.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/68.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/72.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/79.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/85.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/102.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/110.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/114.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/124.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/126.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/133.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/136.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/146.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/158.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/161.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/171.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/177.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/194.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/223.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/230.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/240.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/248.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/253.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/255.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/258.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/263.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/270.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/272.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/276.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/277.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/306.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/307.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/309.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/313.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/314.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/315.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/320.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/322.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/326.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/347.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/365.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/368.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/370.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/382.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/384.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/385.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/390.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/392.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/393.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/401.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/402.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/411.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/414.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/415.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/426.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/437.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/446.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/453.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/455.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/457.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/459.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/461.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/468.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/477.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/478.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/479.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/493.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/494.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/502.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/504.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/505.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/509.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/521.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/525.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/533.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/543.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/544.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/556.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/563.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/565.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/569.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/578.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/580.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/590.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/591.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/593.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/595.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/598.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/599.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/604.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/609.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/610.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/614.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/629.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/638.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/640.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/641.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/650.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/654.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/655.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/662.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/666.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/667.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/673.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/675.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/679.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/681.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/685.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/686.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/691.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/698.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/700.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/703.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/704.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/705.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/708.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/718.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/722.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/723.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/727.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/729.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/745.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/770.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/776.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/777.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/778.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/781.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/786.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/794.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/797.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/798.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/802.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/803.jpg", alt: "Retrato 1"},
                    {src: "assent/cuadros-categ/animales/826.jpg", alt: "Retrato 2"},
                    {src: "assent/cuadros-categ/animales/829.jpg", alt: "Retrato 1"}
                  ],
                paisajes: [
                    {src: "assent/cuadros-categ/paisajes/17.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/20.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/26.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/28.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/30.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/53.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/63.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/76.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/86.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/95.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/101.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/104.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/105.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/107.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/119.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/148.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/149.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/153.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/169.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/175.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/189.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/190.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/195.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/205.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/209.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/227.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/241.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/243.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/265.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/275.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/294.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/302.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/311.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/340.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/349.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/526.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/635.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/651.jpg", alt: "Landscape 2"},
                    {src: "assent/cuadros-categ/paisajes/693.jpg", alt: "Landscape 1"},
                    {src: "assent/cuadros-categ/paisajes/699.jpg", alt: "Landscape 2"}
                   
                ],
                plantas: [
                    {src: "assent/cuadros-categ/plantas/34.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/49.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/51.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/58.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/60.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/87.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/116.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/152.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/160.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/165.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/168.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/179.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/184.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/224.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/232.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/236.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/238.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/242.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/245.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/257.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/262.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/334.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/351.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/371.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/372.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/375.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/400.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/408.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/409.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/417.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/418.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/433.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/441.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/443.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/444.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/445.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/454.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/456.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/465.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/469.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/476.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/496.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/523.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/524.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/536.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/537.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/540.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/546.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/549.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/553.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/561.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/567.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/658.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/659.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/660.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/664.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/668.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/680.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/702.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/706.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/707.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/710.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/712.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/714.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/717.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/720.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/747.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/748.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/750.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/758.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/762.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/764.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/765.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/766.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/771.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/772.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/784.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/801.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/804.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/813.jpg", alt: "Plants 2"},
                    {src: "assent/cuadros-categ/plantas/816.jpg", alt: "Plants 1"},
                    {src: "assent/cuadros-categ/plantas/818.jpg", alt: "Plants 2"}

                ],
                // Agrega más galerías según sea necesario
            };
            
             // Variables globales
             let slideActual = 0;
             let imagenesActuales = [];
             let modal = document.getElementById("galeriaModal");
             let carrusel = document.querySelector(".carrusel");
             let contador = document.getElementById("contador");
             let puntosIndicadores = document.getElementById("puntos-indicadores");
             let cerrarBtn = document.querySelector(".cerrar");

             
             
             // Configurar los botones
           
           /*  document.querySelectorAll(".boton-categoria").forEach(boton => {
                 boton.addEventListener("click", function() {
                     const categoria = this.getAttribute("data-galeria");
                     abrirGaleria(categoria);
                 });
                 
                 // Soporte para touch en móviles
                 boton.addEventListener("touchstart", function(e) {
                     this.style.transform = "translateY(-1px)";
                     e.preventDefault();
                 });
                 
                 boton.addEventListener("touchend", function() {
                     this.style.transform = "";
                 });
             });*/
           /*nuevo*/
           document.querySelectorAll(".boton-categoria").forEach(boton => {
            // Función para manejar la apertura
            const abrirGaleriaHandler = function() {
                const categoria = this.getAttribute("data-galeria");
                abrirGaleria(categoria);
            };
            
            // Agregar ambos eventos
            boton.addEventListener("click", abrirGaleriaHandler);
            boton.addEventListener("touchend", abrirGaleriaHandler);
            
            // Feedback táctil mejorado
            boton.addEventListener("touchstart", function(e) {
                this.style.transform = "scale(0.95)";
                e.preventDefault();
            });
            
            boton.addEventListener("touchend", function() {
                this.style.transform = "";
            });
        });
             // Función para abrir la galería
          /*   function abrirGaleria(categoria) {
                 if (galerias[categoria] && galerias[categoria].length > 0) {
                     imagenesActuales = galerias[categoria];
                     slideActual = 0;
                     mostrarImagenes();
                     modal.style.display = "block";
                     document.body.style.overflow = "hidden";
                     
                     // Bloquear el zoom en móviles cuando el modal está abierto
                     const viewportMeta = document.querySelector('meta[name="viewport"]');
                     viewportMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
                 }
             }*/
            /*otranueva*/
            function abrirGaleria(categoria) {
                if (galerias[categoria] && galerias[categoria].length > 0) {
                     
                    imagenesActuales = galerias[categoria];
                    slideActual = 0;
                    mostrarImagenes();
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                   
                 
                    // Resetear transformaciones al abrir
                    const slides = document.querySelectorAll(".slide");
                    slides.forEach(slide => {
                        slide.style.transform = "none";
                    });
                } else {
                    console.error("Not Imagen:", categoria);
                }
            }
             

             // Función para mostrar las imágenes en el carrusel
             function mostrarImagenes() {
                 carrusel.innerHTML = "";
                 puntosIndicadores.innerHTML = "";
                 
                 imagenesActuales.forEach((imagen, index) => {
                     // Crear slide
                     const slide = document.createElement("div");
                     slide.className = `slide ${index === 0 ? 'activo' : ''}`;
                     
                     // Crear imagen
                     const img = document.createElement("img");
                     img.src = imagen.src;
                     img.alt = imagen.alt;
                     img.loading = "lazy"; // Carga lazy para mejor performance
                     
                     // Zoom al hacer clic/toque
                     img.onclick = function() {
                         this.classList.toggle("zoom");
                     };
                     
                     // Soporte para touch
                     let touchStartX = 0;
                     let touchEndX = 0;
                     
                     img.addEventListener('touchstart', function(e) {
                         touchStartX = e.changedTouches[0].screenX;
                     }, {passive: true});
                     
                     img.addEventListener('touchend', function(e) {
                         touchEndX = e.changedTouches[0].screenX;
                         handleSwipe();
                     }, {passive: true});
                     
                     function handleSwipe() {
                         if (touchEndX < touchStartX - 50) {
                             cambiarSlide(1); // Deslizar a la izquierda
                         } else if (touchEndX > touchStartX + 50) {
                             cambiarSlide(-1); // Deslizar a la derecha
                         } else if (Math.abs(touchEndX - touchStartX) < 10) {
                             this.classList.toggle("zoom"); // Tocar para zoom
                         }
                     }
                     
                     slide.appendChild(img);
                     carrusel.appendChild(slide);
                     
                     // Crear puntos indicadores
                     const punto = document.createElement("div");
                     punto.className = `punto ${index === 0 ? 'activo' : ''}`;
                     punto.onclick = () => {
                         cambiarSlide(index - slideActual);
                        
                     };
                     puntosIndicadores.appendChild(punto);
                 });
                 
                 actualizarContador();
             }
             
             // Función para cambiar de imagen
             function cambiarSlide(n) {
                 const slides = document.querySelectorAll(".slide");
                 const puntos = document.querySelectorAll(".punto");
                 
                
                 if (slides.length === 0) return;
                 
                 slides[slideActual].classList.remove("activo");
                 puntos[slideActual].classList.remove("activo");
                 
                 slideActual += n;
                 
                 if (slideActual >= slides.length) slideActual = 0;
                 if (slideActual < 0) slideActual = slides.length - 1;
                 
                 slides[slideActual].classList.add("activo");
                 puntos[slideActual].classList.add("activo");
                 actualizarContador();
                 
                 // Salir del zoom al cambiar de imagen
                 const imgZoom = slides[slideActual].querySelector('.zoom');
                 if (imgZoom) {
                     imgZoom.classList.remove('zoom');
                 }
             }
             
             // Función para actualizar el contador
             function actualizarContador() {
                 contador.textContent = `${slideActual + 1} de ${imagenesActuales.length}`;
             }
             
             // Eventos para cerrar el modal
             cerrarBtn.addEventListener("click", cerrarModal);
             
             function cerrarModal() {
                 modal.style.display = "none";
                 document.body.style.overflow = "auto";
                 
                 // Restaurar el zoom en móviles cuando se cierra el modal
                 const viewportMeta = document.querySelector('meta[name="viewport"]');
                 viewportMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
                 
                 // Salir del zoom si estaba activo
                 const imgZoom = document.querySelector('.slide.activo img.zoom');
                 if (imgZoom) {
                     imgZoom.classList.remove('zoom');
                 }
             }
             
             window.addEventListener("click", function(event) {
                 if (event.target === modal) {
                     cerrarModal();
                 }
             });
             
             // Eventos para navegación con teclado
             document.addEventListener("keydown", function(event) {
                 if (modal.style.display === "block") {
                     if (event.key === "ArrowLeft") {
                         cambiarSlide(-1);
                     } else if (event.key === "ArrowRight") {
                         cambiarSlide(1);
                     } else if (event.key === "Escape") {
                         cerrarModal();
                     }
                 }
             });
             
             // Detectar cambios de orientación en móviles
             window.addEventListener("orientationchange", function() {
                 if (modal.style.display === "block") {
                     // Forzar redibujado al cambiar orientación
                     carrusel.style.display = 'none';
                     carrusel.offsetHeight; // Trigger reflow
                     carrusel.style.display = '';
                 }
             });
        /*   function agregarBotonDescarga() {
                const btnDescarga = document.createElement('button');
                btnDescarga.textContent = 'Descargar';
                btnDescarga.onclick = () => {
                    const imgActual = document.querySelector('.slide.activo img');
                    const link = document.createElement('a');
                    link.href = imgActual.src;
                    link.download = `arte-${Date.now()}.jpg`;
                    link.click();
                };
                document.querySelector('.indicadores').appendChild(btnDescarga);
            }*/
            /*ventana de whatp up*/
           
    const whatsappBtn = document.getElementById("whatsapp-button");
    const modal_whatup = document.getElementById("modal-whatup-id");
    const closeModalBtn = document.getElementById("closeModal");
    const sendButton = document.getElementById("sendButton");
    const messageInput = document.getElementById("messageInput");

    const whatsappNumber = "+18133181058"; // Reemplaza con tu nÃºmero

    // Mostrar u ocultar botÃ³n al hacer scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        whatsappBtn.style.display = "flex";
      } else {
        whatsappBtn.style.display = "none";
      }
    });

    // Abrir modal al hacer clic en el botÃ³n
    whatsappBtn.addEventListener("click", () => {
      modal_whatup.classList.add("active");
    });

    // Cerrar modal
    closeModalBtn.addEventListener("click", () => {
      modal_whatup.classList.remove("active");
      messageInput.value = ""; // Limpiar mensaje
    });

    // Enviar mensaje por WhatsApp
    sendButton.addEventListener("click", () => {
      const userMessage = messageInput.value.trim();
      if (userMessage !== "") {
        const encodedMessage = encodeURIComponent(userMessage);
        window.open(`https://wa.me/ ${whatsappNumber}?text=${encodedMessage}`, "_blank");
        modal_whatup.classList.remove("active");
        messageInput.value = ""; // Limpiar despuÃ©s de enviar
      } else {
        alert("Please, write the messege before sending.");
      }
    });

