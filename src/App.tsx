import { useEffect } from "react";
import "./App.css";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { listCountries } from "./services/openholiday";
import DropDown from "./components/dropdown/Dropdown";

function App() {
  useEffect(() => {
    async function loadData() {
      const countries = await listCountries();
      console.log("countries=================================");
      console.log(countries);
      console.log("=================================");
    }
    loadData();
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at neque convallis ante rutrum imperdiet. Mauris
        eleifend nec sapien quis placerat. Sed eget cursus est. Mauris ut interdum enim. Etiam venenatis mollis risus,
        vel iaculis ligula sagittis quis. Integer a leo pellentesque lorem placerat feugiat. Nunc vel tortor convallis,
        imperdiet neque sit amet, convallis lorem. Proin a ante ut elit pharetra tempor. Donec nec rhoncus purus. Donec
        vehicula consectetur lacus vel commodo. Pellentesque consectetur feugiat iaculis. Mauris porttitor dolor vitae
        venenatis feugiat. Maecenas suscipit erat sed ornare finibus. Etiam luctus id lorem vitae fringilla. Donec
        efficitur ante ac vestibulum vehicula. Cras ac est non enim laoreet imperdiet ut ut eros. Integer diam neque,
        dapibus quis nibh at, vehicula feugiat arcu. Vestibulum augue leo, molestie sit amet finibus ut, laoreet vitae
        odio. Aenean sollicitudin sed ex eget imperdiet. Donec ornare placerat tortor, non elementum turpis gravida in.
        Sed ac nisl cursus, feugiat neque a, tempus odio. Fusce eget tortor tempus, hendrerit massa ac, facilisis augue.
        Suspendisse potenti. Duis posuere quis enim non facilisis. Aenean magna erat, tincidunt ac ante a, sodales
        venenatis turpis. Proin vehicula, dolor eget luctus bibendum, dolor ante porttitor ligula, egestas laoreet mi
        ante suscipit turpis. Maecenas sodales venenatis pulvinar. Aliquam laoreet, quam eu pharetra aliquam, mauris
        ligula consequat orci, at bibendum neque nisi at justo. Cras scelerisque malesuada enim, ac ornare odio lacinia
        et. Suspendisse placerat aliquam eros, id pellentesque tellus lacinia vel. Vestibulum interdum mi nulla, id
        sodales est maximus vitae. Etiam efficitur nisi nec ullamcorper finibus. Cras eu metus nec dui efficitur
        hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce molestie
        sollicitudin pharetra. Nulla aliquam velit vel molestie tempus. Nulla dictum enim finibus arcu commodo tempus.
        Donec maximus suscipit magna, sit amet posuere sapien fermentum blandit. Aenean ut semper arcu. In dapibus nibh
        ac mauris feugiat, interdum luctus odio ullamcorper. Curabitur quis condimentum nisi. Nullam lorem felis,
        iaculis at elementum non, congue sit amet augue. Nunc ac massa in neque tempor rhoncus sed vel ligula. Phasellus
        varius, tellus sit amet tincidunt scelerisque, turpis lectus molestie lacus, sollicitudin aliquet ex velit eget
        turpis. Aliquam eget nisi tincidunt, tincidunt ipsum sagittis, vehicula leo. Donec pulvinar faucibus gravida. In
        ut augue vel purus accumsan blandit. Nullam aliquet non nisl eget mattis. Quisque lobortis erat porta, molestie
        metus in, mollis turpis.
      </p>
      <div className="dropdown-container">
        <DropDown
          options={[
            {
              id: 1,
              value: "uno",
            },
            {
              id: 2,
              value: "dos with a big  content to make the dropdown useless",
            },
            {
              id: 3,
              value: "tres",
            },
          ]}
        />
      </div>
      <div className="dropdown-container">
        <DropDown
          options={[
            {
              id: 1,
              value: "uno",
            },
            {
              id: 2,
              value: "dos ",
            },
            {
              id: 3,
              value: "tres",
            },
          ]}
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at neque convallis ante rutrum imperdiet. Mauris
        eleifend nec sapien quis placerat. Sed eget cursus est. Mauris ut interdum enim. Etiam venenatis mollis risus,
        vel iaculis ligula sagittis quis. Integer a leo pellentesque lorem placerat feugiat. Nunc vel tortor convallis,
        imperdiet neque sit amet, convallis lorem. Proin a ante ut elit pharetra tempor. Donec nec rhoncus purus. Donec
        vehicula consectetur lacus vel commodo. Pellentesque consectetur feugiat iaculis. Mauris porttitor dolor vitae
        venenatis feugiat. Maecenas suscipit erat sed ornare finibus. Etiam luctus id lorem vitae fringilla. Donec
        efficitur ante ac vestibulum vehicula. Cras ac est non enim laoreet imperdiet ut ut eros. Integer diam neque,
        dapibus quis nibh at, vehicula feugiat arcu. Vestibulum augue leo, molestie sit amet finibus ut, laoreet vitae
        odio. Aenean sollicitudin sed ex eget imperdiet. Donec ornare placerat tortor, non elementum turpis gravida in.
        Sed ac nisl cursus, feugiat neque a, tempus odio. Fusce eget tortor tempus, hendrerit massa ac, facilisis augue.
        Suspendisse potenti. Duis posuere quis enim non facilisis. Aenean magna erat, tincidunt ac ante a, sodales
        venenatis turpis. Proin vehicula, dolor eget luctus bibendum, dolor ante porttitor ligula, egestas laoreet mi
        ante suscipit turpis. Maecenas sodales venenatis pulvinar. Aliquam laoreet, quam eu pharetra aliquam, mauris
        ligula consequat orci, at bibendum neque nisi at justo. Cras scelerisque malesuada enim, ac ornare odio lacinia
        et. Suspendisse placerat aliquam eros, id pellentesque tellus lacinia vel. Vestibulum interdum mi nulla, id
        sodales est maximus vitae. Etiam efficitur nisi nec ullamcorper finibus. Cras eu metus nec dui efficitur
        hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce molestie
        sollicitudin pharetra. Nulla aliquam velit vel molestie tempus. Nulla dictum enim finibus arcu commodo tempus.
        Donec maximus suscipit magna, sit amet posuere sapien fermentum blandit. Aenean ut semper arcu. In dapibus nibh
        ac mauris feugiat, interdum luctus odio ullamcorper. Curabitur quis condimentum nisi. Nullam lorem felis,
        iaculis at elementum non, congue sit amet augue. Nunc ac massa in neque tempor rhoncus sed vel ligula. Phasellus
        varius, tellus sit amet tincidunt scelerisque, turpis lectus molestie lacus, sollicitudin aliquet ex velit eget
        turpis. Aliquam eget nisi tincidunt, tincidunt ipsum sagittis, vehicula leo. Donec pulvinar faucibus gravida. In
        ut augue vel purus accumsan blandit. Nullam aliquet non nisl eget mattis. Quisque lobortis erat porta, molestie
        metus in, mollis turpis.
      </p>
    </div>
  );
}

export default App;
