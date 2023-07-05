// source : https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNDFkZWRlZWUyZDE4NjliNjU3ZmE5MzAzMDAwODJmZTI2YjNkOTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODg0NDU5MTQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDI5MDAyMzczMDAxNDM2MzY4NCIsImVtYWlsIjoiaGFpYmUxOTE1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiSOG6o2kgTmd1eeG7hW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZXhvcXQ1VW5Dbm05TEhqcUxNQ09XSjdLN2VTZ3FDOXhDVWNmMFB4S0VWPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkjhuqNpIiwiZmFtaWx5X25hbWUiOiJOZ3V54buFbiIsImlhdCI6MTY4ODQ0NjIxNCwiZXhwIjoxNjg4NDQ5ODE0LCJqdGkiOiJhYTk3OGJhYTZjODIzMzBjY2Q0MzRhNzYyODBmZWZlOGY2OTc3MTU5In0.dKA_iR68ykF-EJx-_8bEIYYK6_QbU04nRBjxtee-eW_lRJXULBhNsBI-QfcMbKsdnRqeg1OolufamvHhm-D0grIn0MDrMjFIrrbxCM9ttj0EaRLBXfTuLgK_FNi0MW4SrZvfYqqoM0v-HJwnHzCHxmPoj6vpqfIqGmJlNR7PsXi3AKv8ded-AHg7yUdhZmmoEGI-3A5f2F10qg6GoSl-WskBY65ypBJWAC23zvuprCf-b9jzkW2iuGf7BIrGjRhQStpDEnI-QNArsSG1HpQaCDWHqKqBGqHzSKjmDXiZdZdf4jQvGyzFqPTfBxkLXjUPQIDlylvd7kgV8AalJNuB6A

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type TIntersect = {
  root?: Document | Element | null | undefined;
  rootMargin?: string | undefined;
  threshold?: number | number[] | undefined;
};

export const useIntersect = ({
  root = null,
  rootMargin,
  threshold = 0,
}: TIntersect): [Dispatch<SetStateAction<Element | null>> | null, IntersectionObserverEntry | undefined] => {
  const [entry, updateEntry] = useState<IntersectionObserverEntry | undefined>();
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    });

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};

export const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);
