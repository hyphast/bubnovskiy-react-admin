import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:5000';
const httpClient = fetchUtils.fetchJson;

function withIdField(items) {
  if (Array.isArray(items)) {
    const itemsList = items.map(i => ({
      id: i._id,
      ...i,
    }))

    return itemsList
  }
  else {
    const itemsList = {id: items._id, ...items}

    return itemsList;
  }
  // for(let item in items) {
  //   if (Array.isArray(i)) {
  //
  //   }
  //   return Object.keys(item).map(i => {
  //      return i === '_id' ? item[i] : i;
  //   })
  // }
  //  const itemsList = items.map(item => {
  //    Object.keys(item).map(i => {
  //      if (Array.isArray(i)) {
  //        Object.keys(i).map(j => {
  //          if (j === '_id') i['id'] = i[j];
  //        })
  //      }
  //      if (i === '_id') item['id'] = item[i];
  //    })
  //  })
  //  return itemsList;
}

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      const usersList = withIdField(json)
      console.log(usersList)
      return {
        data: usersList,
        total: parseInt(headers.get('content-range').split('/').pop(), 10),
      }
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
      let data
      if (resource === 'appointments') {
        const withId = {...json, id: json._id,}

        data = withId

        data.appointments = withId.appointments.map((app) => ({
          id: app._id,
          ...app,
        }))

        data.appointments.forEach((app) => {
          app.treatment = app.patients.filter(
            (item) => item.appointmentType === 'Лечебные занятия',
          )
          app.physicalTraining = app.patients.filter(
            (item) =>
              item.appointmentType === 'Физкультурно-оздоровительные занятия',
          )
        })
      } else if (resource === 'users') {
        data = withIdField(json)
        console.log('data', data)
      }
      return {
        data: data,
      }
    }),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      console.log('json', json)
      console.log('params', params)
      const data = json
      data.date = params.data.date
      data.id = params.id
      return {
        data: data
      }
    }),

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids}),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids}),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'DELETE',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};